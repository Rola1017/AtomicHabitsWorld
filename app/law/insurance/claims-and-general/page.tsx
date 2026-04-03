import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜理賠與保險通則｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜理賠與保險通則的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/claims-and-general",
  },
  openGraph: {
    title: "法律｜保險法｜理賠與保險通則｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜理賠與保險通則的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/claims-and-general",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function ClaimsAndGeneralPage() {
  return (
    <CategoryLayout
      heroTitle={["理賠實務與保險法總則"]}
      heroLatin="Claims practice & general principles."
    >
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general"
        emptyLabel="目前尚無「理賠實務與保險法總則」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
