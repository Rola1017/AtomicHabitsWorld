import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜個別勞動｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜個別勞動的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/individual",
  },
  openGraph: {
    title: "法律｜勞動法｜個別勞動｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜個別勞動的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/individual",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function IndividualLaborPage() {
  return (
    <CategoryLayout
      heroTitle={["個別勞動法"]}
      heroLatin="Individual labor law."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual"
        emptyLabel="目前尚無「個別勞動法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
