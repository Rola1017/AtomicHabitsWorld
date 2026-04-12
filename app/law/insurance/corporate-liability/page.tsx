import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜企業責任保險｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜企業責任保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/corporate-liability",
  },
  openGraph: {
    title: "法律｜保險法｜企業責任保險｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜企業責任保險的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/corporate-liability",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function CorporateLiabilityPage() {
  return (
    <CategoryLayout
      heroTitle={["企業保險與責任險"]}
      heroLatin="Corporate insurance & liability."
    >
      <LawWpCategoryPostList
        sitePathKey="insurance/corporate-liability"
        emptyLabel="目前尚無「企業保險與責任險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
