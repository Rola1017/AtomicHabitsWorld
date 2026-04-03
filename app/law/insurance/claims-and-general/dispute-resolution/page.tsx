import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜理賠與保險通則｜保險爭議處理｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜理賠與保險通則｜保險爭議處理的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/claims-and-general/dispute-resolution",
  },
  openGraph: {
    title: "法律｜保險法｜理賠與保險通則｜保險爭議處理｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜理賠與保險通則｜保險爭議處理的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/claims-and-general/dispute-resolution",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function DisputeResolutionPage() {
  return (
    <CategoryLayout heroTitle={["爭議處理"]} heroLatin="Dispute resolution.">
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general/dispute-resolution"
        emptyLabel="目前尚無「爭議處理」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
