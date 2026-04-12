import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜勞動社會保障｜就業保險｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜勞動社會保障｜就業保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/social/employment-insurance",
  },
  openGraph: {
    title: "法律｜勞動法｜勞動社會保障｜就業保險｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜勞動社會保障｜就業保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/social/employment-insurance",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function EmploymentInsurancePage() {
  return (
    <CategoryLayout
      heroTitle={["就業保險與失業保障"]}
      heroLatin="Employment insurance & unemployment security."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/employment-insurance"
        emptyLabel="目前尚無「就業保險與失業保障」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
