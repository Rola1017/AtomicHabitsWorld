import { ArticleCard } from "@/components/law/article-card"
import {
  getMergedWpCategorySlugsForSitePath,
  getWpCategorySlugForSitePath,
  WP_LAW_HOME_CATEGORY_SLUGS,
  WP_LAW_PAGE_MERGED_CATEGORY_SLUGS,
} from "@/config/law-site-wp-slugs"
import type { LawPostListItem } from "@/lib/wp-posts-by-category-slug"
import {
  fetchPublishedPostsByAnyWpCategorySlugs,
  fetchPublishedPostsByWpCategorySlug,
} from "@/lib/wp-posts-by-category-slug"

type LawWpCategoryPostListProps = {
  /**
   * 相對 /law/ 的路徑，不含前後斜線。
   * `/law` 法律總覽傳 `__law__`（合併 law 與已串接子分類，見 WP_LAW_PAGE_MERGED_CATEGORY_SLUGS）。
   */
  sitePathKey: string
  emptyLabel: string
}

export async function LawWpCategoryPostList({
  sitePathKey,
  emptyLabel,
}: LawWpCategoryPostListProps) {
  let posts: Array<{ title: string; slug: string; href?: string; excerpt?: string }> =
    []
  let usePerPostHref = false

  if (sitePathKey === "__law__") {
    const merged: LawPostListItem[] =
      await fetchPublishedPostsByAnyWpCategorySlugs(
        WP_LAW_PAGE_MERGED_CATEGORY_SLUGS,
        96
      )
    posts = merged
    usePerPostHref = true
  } else if (sitePathKey === "__all__") {
    const merged: LawPostListItem[] =
      await fetchPublishedPostsByAnyWpCategorySlugs(
        WP_LAW_HOME_CATEGORY_SLUGS,
        48
      )
    posts = merged
    usePerPostHref = true
  } else {
    const mergedSlugs = getMergedWpCategorySlugsForSitePath(sitePathKey)
    if (mergedSlugs) {
      posts = await fetchPublishedPostsByAnyWpCategorySlugs(
        mergedSlugs,
        48
      )
      usePerPostHref = true
    } else {
      const wpSlug = getWpCategorySlugForSitePath(sitePathKey)
      if (!wpSlug) {
        posts = []
      } else {
        posts = await fetchPublishedPostsByWpCategorySlug(wpSlug, 48)
      }
    }
  }

  const base =
    sitePathKey === "__all__" || sitePathKey === "__law__" ? "" : sitePathKey
  const hasPosts = posts.length > 0

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {hasPosts ? (
        posts.map((post) => {
          const href =
            usePerPostHref && post.href
              ? post.href
              : `/law/${base}/${encodeURIComponent(post.slug)}`
          return (
            <ArticleCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              href={href}
              variant="simple"
            />
          )
        })
      ) : (
        <div className="rounded-2xl border border-[#D1C7B7] bg-white/70 p-6 text-center text-[#6b7280] sm:p-8">
          {emptyLabel}
        </div>
      )}
    </div>
  )
}
