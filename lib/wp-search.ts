import { wpGraphqlNoStore } from "@/lib/wp-graphql-isr"

export type WpSearchPostHit = {
  title: string
  slug: string
  excerpt: string | null
  uri: string
}

type WpSearchNode = {
  title?: string | null
  slug?: string | null
  excerpt?: string | null
  uri?: string | null
}

type WpSearchResponse = {
  data?: {
    posts?: { nodes?: WpSearchNode[] }
  }
  errors?: Array<{ message?: string }>
}

const QUERY_WITH_CATEGORIES = `
  query WpSearchPosts($search: String!, $categoryIds: [ID], $first: Int) {
    posts(
      where: {
        search: $search
        categoryIn: $categoryIds
        orderby: { field: DATE, order: DESC }
      }
      first: $first
    ) {
      nodes {
        title
        slug
        excerpt
        uri
      }
    }
  }
`

const QUERY_SEARCH_ONLY = `
  query WpSearchPostsNoCategory($search: String!, $first: Int) {
    posts(
      where: {
        search: $search
        orderby: { field: DATE, order: DESC }
      }
      first: $first
    ) {
      nodes {
        title
        slug
        excerpt
        uri
      }
    }
  }
`

export type FetchWpPostsSearchParams = {
  /** 關鍵字（會 trim；空字串則回傳 []） */
  search: string
  /** WordPress 分類 `databaseId`；空陣列表示不限分類 */
  categoryDatabaseIds: number[]
  /** 最多筆數，預設 24 */
  first?: number
}

/**
 * 以 WPGraphQL `posts` 搜尋已發佈文章（標題與內文等由 WP `search` 行為決定）。
 * 有傳分類時：`where: { search, categoryIn }`；未選分類時僅 `where: { search }`。
 */
export async function fetchWpPostsSearch(
  params: FetchWpPostsSearchParams
): Promise<WpSearchPostHit[]> {
  const endpoint = process.env.WORDPRESS_API_URL
  const q = params.search.trim()
  if (!endpoint || !q) return []

  const first = params.first ?? 24
  const categoryIds = params.categoryDatabaseIds.filter(
    (id) => typeof id === "number" && Number.isFinite(id) && id > 0
  )

  try {
    const body =
      categoryIds.length > 0
        ? JSON.stringify({
            query: QUERY_WITH_CATEGORIES,
            variables: { search: q, categoryIds, first },
          })
        : JSON.stringify({
            query: QUERY_SEARCH_ONLY,
            variables: { search: q, first },
          })

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      ...wpGraphqlNoStore,
    })

    if (!res.ok) return []

    const json = (await res.json()) as WpSearchResponse
    if (json.errors?.length) return []

    const nodes = json.data?.posts?.nodes ?? []
    return nodes
      .filter((n) => n.slug?.trim() && n.title?.trim() && n.uri?.trim())
      .map((n) => ({
        title: (n.title ?? "").trim(),
        slug: (n.slug ?? "").trim(),
        excerpt: n.excerpt?.trim() ? n.excerpt.trim() : null,
        uri: (n.uri ?? "").trim(),
      }))
  } catch {
    return []
  }
}
