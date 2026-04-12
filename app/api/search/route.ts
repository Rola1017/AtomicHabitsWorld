import { NextResponse } from "next/server"

import { getLawArticleHrefFromWpCategories } from "@/config/wp-category-to-law-path"
import {
  getMergedWpCategorySlugsForSitePath,
  getWpCategorySlugForSitePath,
} from "@/config/law-site-wp-slugs"
import { fetchWpPostsSearch } from "@/lib/wp-search"
import { wpGraphqlNoStore } from "@/lib/wp-graphql-isr"
import { stripHtml } from "@/lib/strip-html"

const ALLOWED_SITE_PATHS = [
  "labor",
  "insurance",
  "civil",
  "administrative",
  "criminal",
  "civil-procedure",
] as const

type AllowedSitePath = (typeof ALLOWED_SITE_PATHS)[number]

function isAllowedSitePath(s: string): s is AllowedSitePath {
  return (ALLOWED_SITE_PATHS as readonly string[]).includes(s)
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
        query LawSearchCatId($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            databaseId
          }
        }
      `,
      variables: { slug },
    }),
    ...wpGraphqlNoStore,
  })
  if (!res.ok) return null
  const json = (await res.json()) as {
    data?: { category?: { databaseId?: number } | null }
    errors?: Array<{ message?: string }>
  }
  if (json.errors?.length) return null
  const id = json.data?.category?.databaseId
  return typeof id === "number" ? id : null
}

function wpSlugsForSitePath(sitePath: AllowedSitePath): string[] {
  const merged = getMergedWpCategorySlugsForSitePath(sitePath)
  if (merged?.length) return merged
  const leaf = getWpCategorySlugForSitePath(sitePath)
  return leaf ? [leaf] : []
}

async function resolveCategoryDatabaseIds(
  endpoint: string,
  sitePaths: AllowedSitePath[]
): Promise<number[]> {
  const slugSet = new Set<string>()
  for (const p of sitePaths) {
    for (const s of wpSlugsForSitePath(p)) {
      if (s.trim()) slugSet.add(s.trim())
    }
  }
  const ids = await Promise.all(
    [...slugSet].map((slug) => fetchCategoryDatabaseId(endpoint, slug))
  )
  return [...new Set(ids.filter((id): id is number => id != null))]
}

type PostCatsNode = {
  slug?: string | null
  categories?: { nodes?: Array<{ slug?: string | null }> }
}

async function fetchCategoriesByPostSlugs(
  endpoint: string,
  slugs: string[]
): Promise<Map<string, Array<{ slug?: string }>>> {
  const unique = [...new Set(slugs.map((s) => s.trim()).filter(Boolean))]
  if (unique.length === 0) return new Map()

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query LawSearchPostCats($slugs: [String]) {
          posts(where: { nameIn: $slugs }, first: 50) {
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
      variables: { slugs: unique },
    }),
    ...wpGraphqlNoStore,
  })

  const map = new Map<string, Array<{ slug?: string }>>()
  if (!res.ok) return map

  const json = (await res.json()) as {
    data?: { posts?: { nodes?: PostCatsNode[] } }
    errors?: Array<{ message?: string }>
  }
  if (json.errors?.length) return map

  for (const node of json.data?.posts?.nodes ?? []) {
    const slug = node.slug?.trim()
    if (!slug) continue
    map.set(slug, node.categories?.nodes ?? [])
  }
  return map
}

const EXCERPT_PREVIEW_MAX = 220

function excerptPreview(htmlOrText: string | null): string {
  const plain = stripHtml(htmlOrText ?? "").trim()
  if (!plain) return ""
  return plain.length > EXCERPT_PREVIEW_MAX
    ? `${plain.slice(0, EXCERPT_PREVIEW_MAX).trimEnd()}…`
    : plain
}

export async function POST(req: Request) {
  const endpoint = process.env.WORDPRESS_API_URL
  if (!endpoint) {
    return NextResponse.json(
      { error: "WORDPRESS_API_URL 未設定" },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "無效的 JSON" }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "請求體須為物件" }, { status: 400 })
  }

  const { search, categories } = body as {
    search?: unknown
    categories?: unknown
  }

  const q = typeof search === "string" ? search.trim() : ""
  if (!q) {
    return NextResponse.json({ error: "關鍵字不可為空" }, { status: 400 })
  }

  const rawCats = Array.isArray(categories) ? categories : []
  const sitePaths = rawCats
    .filter((c): c is string => typeof c === "string")
    .filter(isAllowedSitePath)

  const categoryDatabaseIds =
    sitePaths.length > 0
      ? await resolveCategoryDatabaseIds(endpoint, sitePaths)
      : []

  const hits = await fetchWpPostsSearch({
    search: q,
    categoryDatabaseIds,
    first: 24,
  })

  const slugList = hits.map((h) => h.slug)
  const catBySlug = await fetchCategoriesByPostSlugs(endpoint, slugList)

  const results = hits.map((h) => {
    const cats = catBySlug.get(h.slug)
    const href = getLawArticleHrefFromWpCategories(h.slug, cats)
    return {
      title: h.title,
      slug: h.slug,
      href,
      excerpt: excerptPreview(h.excerpt),
    }
  })

  return NextResponse.json({ results })
}
