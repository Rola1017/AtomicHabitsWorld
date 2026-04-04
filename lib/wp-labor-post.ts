import { cache } from "react"

import { wpGraphqlFetchNext } from "@/lib/wp-graphql-isr"

export type WpPostDetail = {
  title: string
  slug: string
  content: string
  excerpt?: string
  date?: string
  status?: string
  categories?: {
    nodes?: Array<{ slug?: string; name?: string }>
  }
  featuredImage?: {
    node?: {
      sourceUrl?: string | null
    } | null
  } | null
}

type WpGraphQLPostResponse = {
  data?: {
    post?: WpPostDetail | null
  }
  errors?: Array<{ message?: string }>
}

/** 與 getLawArticleHrefFromWpCategories 一致：僅掛「法律」父分類時也導向 /law/labor */
const LABOR_SECTION_CATEGORY_SLUGS = new Set(["labor-social-law", "law"])

function normalizePostSlugParam(raw: string): string {
  try {
    const once = decodeURIComponent(raw.trim())
    return once.replace(/^\/+|\/+$/g, "")
  } catch {
    return raw.trim().replace(/^\/+|\/+$/g, "")
  }
}

function postHasAnyCategorySlug(
  post: WpPostDetail,
  slugs: ReadonlySet<string>
): boolean {
  return (
    post.categories?.nodes?.some((c) => c.slug && slugs.has(c.slug)) ?? false
  )
}

const loadPublishedWpPostBySlug = cache(
  async (slug: string): Promise<WpPostDetail | null> => {
    const endpoint = process.env.WORDPRESS_API_URL
    if (!endpoint) return null

    const normalizedSlug = normalizePostSlugParam(slug)
    if (!normalizedSlug) return null

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query LaborPostBySlug($slug: ID!) {
            post(id: $slug, idType: SLUG) {
              title
              slug
              content
              excerpt
              date
              status
              categories {
                nodes {
                  slug
                  name
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        `,
          variables: { slug: normalizedSlug },
        }),
        ...wpGraphqlFetchNext,
      })

      if (!res.ok) return null

      const json = (await res.json()) as WpGraphQLPostResponse
      if (json.errors?.length) return null

      const post = json.data?.post
      if (!post) return null
      if (post.status && post.status.toLowerCase() !== "publish") return null

      return post
    } catch {
      return null
    }
  }
)

export const fetchLaborPostBySlug = cache(
  async (slug: string): Promise<WpPostDetail | null> => {
    const post = await loadPublishedWpPostBySlug(slug)
    if (!post) return null
    if (!postHasAnyCategorySlug(post, LABOR_SECTION_CATEGORY_SLUGS)) return null
    return post
  }
)

/**
 * 詳頁：文章必須帶有指定 WP 分類代稱（例如個別勞動法 `individual`）。
 */
export const fetchLaborPostByRequiredWpCategorySlug = cache(
  async (
    slug: string,
    requiredCategorySlug: string
  ): Promise<WpPostDetail | null> => {
    const req = requiredCategorySlug.trim()
    if (!req) return null
    const post = await loadPublishedWpPostBySlug(slug)
    if (!post) return null
    if (!postHasAnyCategorySlug(post, new Set([req]))) return null
    return post
  }
)
