import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜人身保險規劃｜意外保險｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜人身保險規劃｜意外保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/personal-insurance/accident",
  },
  openGraph: {
    title: "法律｜保險法｜人身保險規劃｜意外保險｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜人身保險規劃｜意外保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/personal-insurance/accident",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function AccidentInsurancePage() {
  return (
    <CategoryLayout heroTitle={["意外險"]} heroLatin="Accident insurance.">
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance/accident"
        emptyLabel="目前尚無「意外險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
