import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜人身保險規劃｜壽險｜儲蓄型保險｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜人身保險規劃｜壽險｜儲蓄型保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/personal-insurance/life-insurance/savings",
  },
  openGraph: {
    title: "法律｜保險法｜人身保險規劃｜壽險｜儲蓄型保險｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜人身保險規劃｜壽險｜儲蓄型保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/personal-insurance/life-insurance/savings",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function SavingsInsurancePage() {
  return (
    <CategoryLayout heroTitle={["儲蓄險"]} heroLatin="Savings-type life insurance.">
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance/life-insurance/savings"
        emptyLabel="目前尚無「儲蓄險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
