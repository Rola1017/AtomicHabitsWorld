import type { MetadataRoute } from "next"

import { getLawArticleHrefFromWpCategories } from "@/config/wp-category-to-law-path"

const SITE_ORIGIN = "https://atomichabitsworld.com"
const DAILY_CATEGORY_TO_PATH: Record<string, string> = {
  study: "/daily/study",
  exam: "/daily/exam",
  essay: "/daily/essay",
  "left-hand-writing": "/daily/left-hand-writing",
  "life-wisdom": "/daily/life-wisdom",
}

type WpPostNode = {
  slug?: string
  modified?: string
  categories?: { nodes?: Array<{ slug?: string }> }
}

type WpPostsResponse = {
  data?: {
    posts?: {
      nodes?: WpPostNode[]
      pageInfo?: {
        hasNextPage?: boolean
        endCursor?: string | null
      }
    }
  }
  errors?: Array<{ message?: string }>
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

async function fetchAllPublishedPosts(): Promise<WpPostNode[]> {
  const endpoint = process.env.WORDPRESS_API_URL
  if (!endpoint) return []

  const out: WpPostNode[] = []
  let cursor: string | null = null

  while (true) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query SitemapPosts($first: Int!, $after: String) {
            posts(
              first: $first
              after: $after
              where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
            ) {
              nodes {
                slug
                modified
                categories {
                  nodes {
                    slug
                  }
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        `,
        variables: { first: 100, after: cursor },
      }),
    })

    if (!res.ok) break

    const json = (await res.json()) as WpPostsResponse
    if (json.errors?.length) break

    const nodes = json.data?.posts?.nodes ?? []
    out.push(...nodes)

    const pageInfo = json.data?.posts?.pageInfo
    if (!pageInfo?.hasNextPage || !pageInfo.endCursor) break
    cursor = pageInfo.endCursor
  }

  return out
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_ORIGIN}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_ORIGIN}/law`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/law/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_ORIGIN}/daily`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const posts = await fetchAllPublishedPosts()
  const seen = new Set<string>()

  const postRoutes: MetadataRoute.Sitemap = posts
    .filter((p) => Boolean(p.slug))
    .map((p) => {
      const slug = p.slug as string
      const dailyHref = getDailyArticleHrefFromCategories(slug, p.categories?.nodes)
      const href = dailyHref ?? getLawArticleHrefFromWpCategories(slug, p.categories?.nodes)
      const url = `${SITE_ORIGIN}${href}`
      return {
        url,
        lastModified: p.modified ? new Date(p.modified) : now,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }
    })
    .filter((entry) => {
      if (seen.has(entry.url)) return false
      seen.add(entry.url)
      return true
    })

  return [...staticRoutes, ...postRoutes]
}
