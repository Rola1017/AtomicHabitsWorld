import { stripHtml } from "@/lib/strip-html"

export type WpPageData = {
  title: string
  slug: string
  contentHtml: string
}

type WpPageNode = {
  title?: string | null
  slug?: string | null
  content?: string | null
}

type WpPagesResponse = {
  data?: {
    pages?: {
      nodes?: WpPageNode[]
    }
  }
  errors?: Array<{ message?: string }>
}

export async function fetchWpPageByKeyword(keyword: string): Promise<WpPageData | null> {
  const endpoint = process.env.WORDPRESS_API_URL
  if (!endpoint) return null

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query SearchPages($search: String!) {
            pages(first: 20, where: { search: $search }) {
              nodes {
                title
                slug
                content
              }
            }
          }
        `,
        variables: { search: keyword },
      }),
      // Founder pages should reflect WP edits immediately.
      cache: "no-store",
    })
    if (!res.ok) return null

    const json = (await res.json()) as WpPagesResponse
    if (json.errors?.length) return null

    const nodes = json.data?.pages?.nodes ?? []
    if (nodes.length === 0) return null

    const normalizedKeyword = keyword.replace(/\s+/g, "").toLowerCase()
    const matchedByTitle = nodes.find((node) => {
      const title = (node.title ?? "").replace(/\s+/g, "").toLowerCase()
      return title.includes(normalizedKeyword)
    })
    const target = matchedByTitle ?? nodes[0]

    const title = (target.title ?? "").trim()
    const slug = (target.slug ?? "").trim()
    const contentHtml = (target.content ?? "").trim()
    if (!title || !slug || !contentHtml) return null

    return { title, slug, contentHtml }
  } catch {
    return null
  }
}

export function wpHtmlToExcerpt(
  html: string | null | undefined,
  max = 110
): string | null {
  const plain = stripHtml(html ?? "")
  if (!plain) return null
  if (plain.length <= max) return plain
  return `${plain.slice(0, max).trimEnd()}…`
}
