import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"
import { getPostsByCategory } from "@/lib/supabase-posts"
import { stripHtml } from "@/lib/strip-html"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

const LIST_BASE =
  "/law/civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship"

export default async function RetirementTrustsAndGuardianshipPage() {
  const articles = await getPostsByCategory("retirement-trusts-and-guardianship")

  return (
    <CategoryLayout
      heroTitle={["安養信託與意定監護"]}
      heroLatin="Retirement trusts & guardianship."
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
            目前尚無「安養信託與意定監護」文章，請稍後再試。
          </div>
        )}
      </div>
    </CategoryLayout>
  )
}

