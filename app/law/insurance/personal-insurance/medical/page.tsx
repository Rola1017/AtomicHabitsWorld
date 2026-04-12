import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜人身保險規劃｜醫療保險｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜人身保險規劃｜醫療保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/personal-insurance/medical",
  },
  openGraph: {
    title: "法律｜保險法｜人身保險規劃｜醫療保險｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜人身保險規劃｜醫療保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/personal-insurance/medical",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function MedicalInsurancePage() {
  return (
    <CategoryLayout heroTitle={["醫療險"]} heroLatin="Medical insurance.">
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance/medical"
        emptyLabel="目前尚無「醫療險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
