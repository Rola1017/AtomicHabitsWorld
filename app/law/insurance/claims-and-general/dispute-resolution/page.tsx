import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜理賠與保險通則｜保險爭議處理｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜理賠與保險通則｜保險爭議處理的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/claims-and-general/dispute-resolution",
  },
  openGraph: {
    title: "法律｜保險法｜理賠與保險通則｜保險爭議處理｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜理賠與保險通則｜保險爭議處理的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/claims-and-general/dispute-resolution",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE = "/law/insurance/claims-and-general/dispute-resolution"

export default async function DisputeResolutionPage() {
  const articles = await getPostsByCategory("dispute-resolution")

  return (
    <CategoryLayout heroTitle={["爭議處理"]} heroLatin="Dispute resolution.">
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
            目前尚無「爭議處理」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}
