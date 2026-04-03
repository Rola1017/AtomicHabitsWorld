import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export const metadata: Metadata = {
  title: "保險法｜AtomicHabitsWorld 每天進步一點點",
  description:
    "保險法專區聚焦理賠爭議、契約效力、人身保險與企業責任風險，提供可落地的法規理解與實務判斷基準。",
  alternates: {
    canonical: "/law/insurance",
  },
  openGraph: {
    title: "保險法｜AtomicHabitsWorld 每天進步一點點",
    description:
      "保險法專區聚焦理賠爭議、契約效力、人身保險與企業責任風險，提供可落地的法規理解與實務判斷基準。",
    url: "/law/insurance",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function InsurancePage() {
  return (
    <CategoryLayout heroTitle={["保險法"]} heroLatin="Insurance law.">
      <LawWpCategoryPostList
        sitePathKey="insurance"
        emptyLabel="目前尚無「保險法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
