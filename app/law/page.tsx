import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

export const metadata: Metadata = {
  title: "法律總覽｜AtomicHabitsWorld 每天一點點",
  description:
    "法律總覽收錄勞動社會法、保險法、民法、行政法、刑法與民事訴訟法文章，提供實務導向的重點整理與案例脈絡。",
  alternates: {
    canonical: "/law",
  },
  openGraph: {
    title: "法律總覽｜AtomicHabitsWorld 每天一點點",
    description:
      "法律總覽收錄勞動社會法、保險法、民法、行政法、刑法與民事訴訟法文章，提供實務導向的重點整理與案例脈絡。",
    url: "/law",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE = "/law"

export default async function LawPage() {
  const articles = await getPostsByCategory("law")

  return (
    <CategoryLayout heroTitle={["法律．權益．救濟"]} heroLatin="Ubi ius, ibi remedium">
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
            目前尚無文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}
