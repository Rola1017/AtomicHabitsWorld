import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜個別勞動｜工資、工時與休假｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜個別勞動｜工資、工時與休假的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/individual/wage-hours-leave",
  },
  openGraph: {
    title: "法律｜勞動法｜個別勞動｜工資、工時與休假｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜個別勞動｜工資、工時與休假的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/individual/wage-hours-leave",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function WageHoursLeavePage() {
  return (
    <CategoryLayout
      heroTitle={["工資、工時與休假"]}
      heroLatin="Wages, working hours & leave."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/wage-hours-leave"
        emptyLabel="目前尚無「工資、工時與休假」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
