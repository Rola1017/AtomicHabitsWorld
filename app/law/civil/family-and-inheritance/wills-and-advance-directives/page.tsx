import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜遺囑與預立指示｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜遺囑與預立指示的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/wills-and-advance-directives",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜遺囑與預立指示｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜遺囑與預立指示的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/wills-and-advance-directives",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE = "/law/civil/family-and-inheritance/wills-and-advance-directives"

export default async function WillsAndAdvanceDirectivesPage() {
  const articles = await getPostsByCategory("wills-and-advance-directives")

  return (
    <CategoryLayout
      heroTitle={["遺囑撰擬與預立醫療決定"]}
      heroLatin="Wills & advance directives."
    >
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
            目前尚無「遺囑撰擬與預立醫療決定」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}
