import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜繼承與特留分｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜繼承與特留分的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/inheritance-and-forced-heirship",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜繼承與特留分｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜繼承與特留分的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/inheritance-and-forced-heirship",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE = "/law/civil/family-and-inheritance/inheritance-and-forced-heirship"

export default async function InheritanceAndForcedHeirshipPage() {
  const articles = await getPostsByCategory("inheritance-and-forced-heirship")

  return (
    <CategoryLayout
      heroTitle={["遺產繼承與特留分實務"]}
      heroLatin="Inheritance & forced heirship."
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
            目前尚無「遺產繼承與特留分實務」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}
