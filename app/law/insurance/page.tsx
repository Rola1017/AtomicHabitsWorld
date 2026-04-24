import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

export const metadata: Metadata = {
  title: "保險法｜AtomicHabitsWorld 每天一點點",
  description:
    "保險法專區聚焦理賠爭議、契約效力、人身保險與企業責任風險，提供可落地的法規理解與實務判斷基準。",
  alternates: {
    canonical: "/law/insurance",
  },
  openGraph: {
    title: "保險法｜AtomicHabitsWorld 每天一點點",
    description:
      "保險法專區聚焦理賠爭議、契約效力、人身保險與企業責任風險，提供可落地的法規理解與實務判斷基準。",
    url: "/law/insurance",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE = "/law/insurance"

export default async function InsurancePage() {
  const articles = await getPostsByCategory("insurance")

  return (
    <CategoryLayout heroTitle={["保險法"]} heroLatin="Insurance law.">
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
            目前尚無「保險法」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}
