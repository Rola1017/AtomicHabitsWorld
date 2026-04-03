import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜理賠與保險通則｜保險契約效力｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜理賠與保險通則｜保險契約效力的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/claims-and-general/contract-validity",
  },
  openGraph: {
    title: "法律｜保險法｜理賠與保險通則｜保險契約效力｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜理賠與保險通則｜保險契約效力的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/claims-and-general/contract-validity",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function ContractValidityPage() {
  return (
    <CategoryLayout heroTitle={["契約效力"]} heroLatin="Contract validity.">
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general/contract-validity"
        emptyLabel="目前尚無「契約效力」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
