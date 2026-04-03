import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜婚姻契約與財產制｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜婚姻契約與財產制的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/marriage-contracts-and-property-regimes",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜婚姻契約與財產制｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜婚姻契約與財產制的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/marriage-contracts-and-property-regimes",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function MarriageContractsAndPropertyRegimesPage() {
  return (
    <CategoryLayout
      heroTitle={["婚姻契約與財產制"]}
      heroLatin="Marriage contracts & property regimes."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/marriage-contracts-and-property-regimes"
        emptyLabel="目前尚無「婚姻契約與財產制」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
