import { cache } from "react"

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

export const fetchLaborPostBySlug = cache(
  async (slug: string): Promise<WpPostDetail | null> => {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
    if (!endpoint) return null

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
          variables: { slug },
        }),
        cache: "no-store",
      })

      if (!res.ok) return null

      const json = (await res.json()) as WpGraphQLPostResponse
      if (json.errors?.length) return null

      const post = json.data?.post
      if (!post) return null

      const inLaborCategory =
        post.categories?.nodes?.some((c) => c.slug === "labor-social-law") ??
        false

      if (!inLaborCategory) return null
      if (post.status && post.status.toLowerCase() !== "publish") return null

      return post
    } catch {
      return null
    }
  }
)
