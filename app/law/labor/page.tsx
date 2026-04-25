import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

export const metadata: Metadata = {
  title: "勞動社會法｜AtomicHabitsWorld 每天一點點",
  description:
    "勞動社會法專區整理勞動契約、工時工資、資遣退休、職災與社會保險等核心議題，協助你快速理解權利義務與救濟方向。",
  alternates: {
    canonical: "/law/labor",
  },
  openGraph: {
    title: "勞動社會法｜AtomicHabitsWorld 每天一點點",
    description:
      "勞動社會法專區整理勞動契約、工時工資、資遣退休、職災與社會保險等核心議題，協助你快速理解權利義務與救濟方向。",
    url: "/law/labor",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE = "/law/labor"

export default async function LaborPage() {
  const articles = await getPostsByCategory("labor-social-law")

  return (
    <CategoryLayout
      heroTitle={[
        "1948 年《世界人權宣言》第 22 條：",
        "每個人都有獲得社會安全保障的權利",
      ]}
      heroLatin="Everyone, as a member of society, has the right to social security."
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
            目前尚無「勞動社會法」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}
