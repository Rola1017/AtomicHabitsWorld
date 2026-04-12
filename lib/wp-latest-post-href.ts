import { getLawArticleHrefFromWpCategories } from "@/config/wp-category-to-law-path"
import { wpGraphqlFetchNext } from "@/lib/wp-graphql-isr"

const DAILY_CATEGORY_TO_PATH: Record<string, string> = {
  study: "/daily/study",
  exam: "/daily/exam",
  essay: "/daily/essay",
  "left-hand-writing": "/daily/left-hand-writing",
  "life-wisdom": "/daily/life-wisdom",
}

function getDailyArticleHrefFromCategories(
  slug: string,
  categories: Array<{ slug?: string }> | undefined
): string | null {
  const nodes = categories ?? []
  for (const [catSlug, basePath] of Object.entries(DAILY_CATEGORY_TO_PATH)) {
    if (nodes.some((c) => c.slug === catSlug)) {
      return `${basePath}/${encodeURIComponent(slug)}`
    }
  }
  return null
}

type WpLatestPostResponse = {
  data?: {
    posts?: {
      nodes?: Array<{
        slug?: string
        categories?: { nodes?: Array<{ slug?: string }> }
      }>
    }
  }
  errors?: Array<{ message?: string }>
}

/**
 * 全站最新一篇已發佈文章（依 WP 發佈日期新→舊）的站內路徑。
 * 與 sitemap 相同：先判日常分類，否則走法律文章 href。
 */
export async function fetchLatestPublishedArticleHref(): Promise<string | null> {
  const endpoint = process.env.WORDPRESS_API_URL
  if (!endpoint) return null

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query LatestPost {
            posts(
              first: 1
              where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
            ) {
              nodes {
                slug
                categories {
                  nodes {
                    slug
                  }
                }
              }
            }
          }
        `,
      }),
      ...wpGraphqlFetchNext,
    })

    if (!res.ok) return null

    const json = (await res.json()) as WpLatestPostResponse
    if (json.errors?.length) return null

    const node = json.data?.posts?.nodes?.[0]
    const slug = node?.slug?.trim()
    if (!slug) return null

    const cats = node.categories?.nodes
    const dailyHref = getDailyArticleHrefFromCategories(slug, cats)
    const href = dailyHref ?? getLawArticleHrefFromWpCategories(slug, cats)
    return href
  } catch {
    return null
  }
}
