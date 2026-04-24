import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

type DailySupabaseCategoryPostListProps = {
  categorySub: string
  listBase: string
  emptyLabel: string
}

export async function DailySupabaseCategoryPostList({
  categorySub,
  listBase,
  emptyLabel,
}: DailySupabaseCategoryPostListProps) {
  const articles = await getPostsByCategory(categorySub)

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {articles.length > 0 ? (
        articles.map((post) => {
          const plain =
            stripHtml(post.excerpt || post.meta_description || "").trim() ||
            undefined
          return (
            <ArticleCard
              key={post.slug}
              title={post.title}
              excerpt={plain}
              href={`${listBase}/${encodeURIComponent(String(post.wp_id))}`}
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
