import { getLawArticleHrefFromWpCategories } from "@/config/wp-category-to-law-path"
import { stripHtml } from "@/lib/strip-html"

type WpPostNode = {
  title?: string
  slug?: string
  excerpt?: string | null
  categories?: { nodes?: Array<{ slug?: string }> }
}

const LIST_EXCERPT_MAX = 200

function excerptForList(raw: string | null | undefined): string | undefined {
  const plain = stripHtml(raw ?? "")
  if (!plain) return undefined
  return plain.length > LIST_EXCERPT_MAX
    ? `${plain.slice(0, LIST_EXCERPT_MAX).trimEnd()}…`
    : plain
}

export type WpPostTitleSlug = { title: string; slug: string; excerpt?: string }

type WpGraphQLResponse = {
  data?: {
    category?: { databaseId?: number } | null
    categories?: { nodes?: Array<{ databaseId?: number }> }
    posts?: { nodes?: WpPostNode[] }
  }
  errors?: Array<{ message?: string }>
}

export type LawPostListItem = {
  title: string
  slug: string
  href: string
  excerpt?: string
}

async function fetchCategoryDatabaseId(
  endpoint: string,
  slug: string
): Promise<number | null> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query CatForList($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            databaseId
          }
        }
      `,
      variables: { slug },
    }),
    cache: "no-store",
  })
  if (!res.ok) return null
  const json = (await res.json()) as WpGraphQLResponse
  if (json.errors?.length) return null
  const id = json.data?.category?.databaseId
  return typeof id === "number" ? id : null
}

/** 僅標題／代稱（列表頁連結由站內 sitePathKey 組出） */
export async function fetchPublishedPostsByWpCategorySlug(
  wpCategorySlug: string,
  first = 48
): Promise<WpPostTitleSlug[]> {
  const endpoint = process.env.WORDPRESS_API_URL
  if (!endpoint || !wpCategorySlug.trim()) return []

  try {
    const categoryId = await fetchCategoryDatabaseId(endpoint, wpCategorySlug)
    if (categoryId === null) return []

    const postsRes = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query PostsByCat($categoryId: [ID], $first: Int) {
            posts(
              where: {
                categoryIn: $categoryId
                orderby: { field: DATE, order: DESC }
              }
              first: $first
            ) {
              nodes {
                title
                slug
                excerpt
              }
            }
          }
        `,
        variables: { categoryId: [categoryId], first },
      }),
      cache: "no-store",
    })

    if (!postsRes.ok) return []

    const postsJson = (await postsRes.json()) as WpGraphQLResponse
    if (postsJson.errors?.length) return []

    const nodes = postsJson.data?.posts?.nodes ?? []
    return nodes
      .filter((n) => n.slug && n.title)
      .map((n) => ({
        title: n.title ?? "",
        slug: n.slug ?? "",
        excerpt: excerptForList(n.excerpt ?? undefined),
      }))
  } catch {
    return []
  }
}

/** 多個分類合併一筆查詢；連結依每篇文章的分類決定 */
export async function fetchPublishedPostsByAnyWpCategorySlugs(
  wpCategorySlugs: string[],
  first = 48
): Promise<LawPostListItem[]> {
  const endpoint = process.env.WORDPRESS_API_URL
  const unique = [...new Set(wpCategorySlugs.filter(Boolean))]
  if (!endpoint || unique.length === 0) return []

  const ids: number[] = []
  for (const slug of unique) {
    const id = await fetchCategoryDatabaseId(endpoint, slug)
    if (id !== null) ids.push(id)
  }
  if (ids.length === 0) return []

  try {
    const postsRes = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query PostsUnion($categoryIds: [ID], $first: Int) {
            posts(
              where: {
                categoryIn: $categoryIds
                orderby: { field: DATE, order: DESC }
              }
              first: $first
            ) {
              nodes {
                title
                slug
                excerpt
                categories {
                  nodes {
                    slug
                  }
                }
              }
            }
          }
        `,
        variables: { categoryIds: ids, first },
      }),
      cache: "no-store",
    })

    if (!postsRes.ok) return []

    const json = (await postsRes.json()) as WpGraphQLResponse
    if (json.errors?.length) return []

    const nodes = json.data?.posts?.nodes ?? []
    const seen = new Set<string>()
    const out: LawPostListItem[] = []
    for (const n of nodes) {
      if (!n.slug || !n.title || seen.has(n.slug)) continue
      seen.add(n.slug)
      out.push({
        title: n.title,
        slug: n.slug,
        href: getLawArticleHrefFromWpCategories(n.slug, n.categories?.nodes),
        excerpt: excerptForList(n.excerpt ?? undefined),
      })
    }
    return out
  } catch {
    return []
  }
}
