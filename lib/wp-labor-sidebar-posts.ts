import { cache } from "react"

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

function pickCategoryLabel(
  nodes: Array<{ name?: string; slug?: string }> | undefined
): string {
  const list = nodes ?? []
  const leaf = list.find((c) => c.slug && c.slug !== "labor-social-law")
  const name = leaf?.name?.trim() || list[0]?.name?.trim()
  return name || "勞動社會法"
}

/**
 * 側欄「熱門／推薦」：WP 核心 GraphQL 無瀏覽次數時，改以發佈日期新到舊排序。
 * 若要改為瀏覽量排序，需在 WP 安裝外掛並擴充 GraphQL。
 */
export const fetchLaborSidebarPosts = cache(
  async (excludeSlug: string, first = 8): Promise<LaborSidebarPost[]> => {
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
        cache: "no-store",
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
        cache: "no-store",
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
