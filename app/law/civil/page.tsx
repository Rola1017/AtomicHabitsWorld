import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

export const metadata: Metadata = {
  title: "民法｜AtomicHabitsWorld 每天一點點",
  description:
    "民法專區涵蓋契約與債權、親屬繼承、侵權損害與物權不動產等主題，幫你建立清楚的民事法律判斷架構。",
  alternates: {
    canonical: "/law/civil",
  },
  openGraph: {
    title: "民法｜AtomicHabitsWorld 每天一點點",
    description:
      "民法專區涵蓋契約與債權、親屬繼承、侵權損害與物權不動產等主題，幫你建立清楚的民事法律判斷架構。",
    url: "/law/civil",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE = "/law/civil"

export default async function CivilPage() {
  const articles = await getPostsByCategory("civil")

  return (
    <CategoryLayout heroTitle={["民法"]} heroLatin="Civil law.">
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
                href={`${LIST_BASE}/${encodeURIComponent(String(post.wp_id))}`}
                variant="simple"
              />
            )
          })
        ) : (
          <div className="rounded-2xl border border-[#D1C7B7] bg-white/70 p-6 text-center text-[#6b7280] sm:p-8">
            目前尚無「民法」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}
