import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜行政法｜AtomicHabitsWorld",
  description: "瀏覽法律｜行政法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/administrative",
  },
  openGraph: {
    title: "法律｜行政法｜AtomicHabitsWorld",
    description: "瀏覽法律｜行政法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/administrative",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function AdministrativePage() {
  return (
    <CategoryLayout heroTitle={["行政法"]} heroLatin="Administrative law.">
      <LawWpCategoryPostList
        sitePathKey="administrative"
        emptyLabel="目前尚無「行政法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

