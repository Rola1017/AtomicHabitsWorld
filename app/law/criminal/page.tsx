import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜刑法｜AtomicHabitsWorld",
  description: "瀏覽法律｜刑法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/criminal",
  },
  openGraph: {
    title: "法律｜刑法｜AtomicHabitsWorld",
    description: "瀏覽法律｜刑法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/criminal",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function CriminalPage() {
  return (
    <CategoryLayout heroTitle={["刑法"]} heroLatin="Criminal law.">
      <LawWpCategoryPostList
        sitePathKey="criminal"
        emptyLabel="目前尚無「刑法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

