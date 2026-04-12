import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜勞動社會保障｜職災保險｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜勞動社會保障｜職災保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/social/occupational-accident-insurance",
  },
  openGraph: {
    title: "法律｜勞動法｜勞動社會保障｜職災保險｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜勞動社會保障｜職災保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/social/occupational-accident-insurance",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function OccupationalAccidentInsurancePage() {
  return (
    <CategoryLayout
      heroTitle={["職業災害保險與保護(災保法)"]}
      heroLatin="Occupational accident insurance."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/occupational-accident-insurance"
        emptyLabel="目前尚無「職業災害保險與保護(災保法)」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
