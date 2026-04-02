import { ArticleCard } from "@/components/law/article-card"
import { fetchPublishedPostsByWpCategorySlug } from "@/lib/wp-posts-by-category-slug"

type DailyWpCategoryPostListProps = {
  siteCategoryPath: string
  wpCategorySlug: string
  emptyLabel: string
}

export async function DailyWpCategoryPostList({
  siteCategoryPath,
  wpCategorySlug,
  emptyLabel,
}: DailyWpCategoryPostListProps) {
  const posts = await fetchPublishedPostsByWpCategorySlug(wpCategorySlug, 48)

  return (
    <div className="flex flex-col gap-4 text-left sm:gap-5">
      {posts.length > 0 ? (
        posts.map((post) => (
          <ArticleCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            href={`/daily/${siteCategoryPath}/${encodeURIComponent(post.slug)}`}
            variant="simple"
          />
        ))
      ) : (
        <div className="rounded-2xl border border-[#D1C7B7] bg-white/70 p-6 text-center text-[#6b7280] sm:p-8">
          {emptyLabel}
        </div>
      )}
    </div>
  )
}

