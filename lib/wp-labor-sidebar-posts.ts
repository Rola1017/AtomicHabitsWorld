import { cache } from "react"

import { wpGraphqlFetchNext } from "@/lib/wp-graphql-isr"

export type LaborSidebarPost = {
  title: string
  slug: string
  featuredImageUrl: string | null
  categoryLabel: string
}

type WpGraphQLSidebarResponse = {
  data?: {
    category?: { databaseId: number } | null
    posts?: {
      nodes?: Array<{
        title?: string
        slug?: string
        featuredImage?: {
          node?: { sourceUrl?: string | null } | null
        } | null
        categories?: {
          nodes?: Array<{ name?: string; slug?: string }>
        }
      }>
    }
  }
  errors?: Array<{ message?: string }>
}

type PopularApiItem = {
  title?: unknown
  slug?: unknown
  post_slug?: unknown
  featuredImageUrl?: unknown
  featured_image_url?: unknown
  thumbnail?: unknown
  image?: unknown
  categoryLabel?: unknown
  category_label?: unknown
  categories?: unknown
  total_views?: unknown
  pageviews?: unknown
  views?: unknown
}

function pickCategoryLabel(
  nodes: Array<{ name?: string; slug?: string }> | undefined
): string {
  const list = nodes ?? []
  const leaf = list.find((c) => c.slug && c.slug !== "labor-social-law")
  const name = leaf?.name?.trim() || list[0]?.name?.trim()
  return name || "勞動社會法"
}

function asNonEmptyString(v: unknown): string | null {
  if (typeof v !== "string") return null
  const s = v.trim()
  return s ? s : null
}

function pickFirstImageUrl(item: PopularApiItem): string | null {
  const candidates = [
    asNonEmptyString(item.featuredImageUrl),
    asNonEmptyString(item.featured_image_url),
    asNonEmptyString(item.thumbnail),
    asNonEmptyString(item.image),
  ]
  return candidates.find(Boolean) ?? null
}

function pickPopularCategoryLabel(item: PopularApiItem): string {
  const direct =
    asNonEmptyString(item.categoryLabel) ?? asNonEmptyString(item.category_label)
  if (direct) return direct

  const rawCategories = item.categories
  if (Array.isArray(rawCategories)) {
    for (const c of rawCategories) {
      if (!c || typeof c !== "object") continue
      const name = asNonEmptyString((c as { name?: unknown }).name)
      if (name) return name
    }
  }

  return "勞動社會法"
}

async function fetchLaborPopularPostsByTraffic(
  excludeSlug: string,
  first: number
): Promise<LaborSidebarPost[]> {
  const endpoint = process.env.WORDPRESS_POPULAR_POSTS_API_URL
  if (!endpoint) return []

  try {
    const url = new URL(endpoint)
    if (!url.searchParams.has("limit")) {
      // 多拿一些，讓排除當前文章後仍有足夠數量可顯示
      url.searchParams.set("limit", String(Math.max(first + 4, 10)))
    }

    const authToken = process.env.WORDPRESS_POPULAR_POSTS_API_TOKEN?.trim()
    const res = await fetch(url.toString(), {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined,
      ...wpGraphqlFetchNext,
    })
    if (!res.ok) return []

    const json = (await res.json()) as unknown
    const rows = Array.isArray(json)
      ? json
      : Array.isArray((json as { data?: unknown })?.data)
        ? ((json as { data: unknown[] }).data ?? [])
        : Array.isArray((json as { posts?: unknown })?.posts)
          ? ((json as { posts: unknown[] }).posts ?? [])
          : []

    if (!Array.isArray(rows) || rows.length === 0) return []

    const decoded = decodeURIComponent(excludeSlug)
    const out: LaborSidebarPost[] = []

    for (const raw of rows) {
      if (!raw || typeof raw !== "object") continue
      const item = raw as PopularApiItem
      const slug = asNonEmptyString(item.slug) ?? asNonEmptyString(item.post_slug)
      const title = asNonEmptyString(item.title)
      if (!slug || !title) continue
      if (slug === decoded) continue

      out.push({
        title,
        slug,
        featuredImageUrl: pickFirstImageUrl(item),
        categoryLabel: pickPopularCategoryLabel(item),
      })
      if (out.length >= 5) break
    }

    return out
  } catch {
    return []
  }
}

/**
 * 側欄「熱門／推薦」：
 * 1) 若有設定 WORDPRESS_POPULAR_POSTS_API_URL，優先使用該 API 的流量排序結果。
 * 2) 若未設定或 API 失敗，fallback 為 WP GraphQL（依日期新到舊）。
 */
export const fetchLaborSidebarPosts = cache(
  async (excludeSlug: string, first = 8): Promise<LaborSidebarPost[]> => {
    const popularByTraffic = await fetchLaborPopularPostsByTraffic(excludeSlug, first)
    if (popularByTraffic.length > 0) return popularByTraffic

    const endpoint = process.env.WORDPRESS_API_URL
    if (!endpoint) return []

    try {
      const catRes = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query LaborCategoryIdSidebar {
              category(id: "labor-social-law", idType: SLUG) {
                databaseId
              }
            }
          `,
        }),
        ...wpGraphqlFetchNext,
      })

      if (!catRes.ok) return []

      const catJson = (await catRes.json()) as WpGraphQLSidebarResponse
      if (catJson.errors?.length) return []

      const categoryId = catJson.data?.category?.databaseId
      if (!categoryId) return []

      const postsRes = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query LaborSidebarPosts($categoryId: [ID], $first: Int) {
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
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          `,
          variables: { categoryId: [categoryId], first },
        }),
        ...wpGraphqlFetchNext,
      })

      if (!postsRes.ok) return []

      const postsJson = (await postsRes.json()) as WpGraphQLSidebarResponse
      if (postsJson.errors?.length) return []

      const nodes = postsJson.data?.posts?.nodes ?? []
      const decoded = decodeURIComponent(excludeSlug)

      return nodes
        .filter((n) => n.slug && n.slug !== decoded)
        .slice(0, 5)
        .map((n) => ({
          title: n.title ?? "",
          slug: n.slug ?? "",
          featuredImageUrl: n.featuredImage?.node?.sourceUrl ?? null,
          categoryLabel: pickCategoryLabel(n.categories?.nodes),
        }))
        .filter((p) => p.title && p.slug)
    } catch {
      return []
    }
  }
)
