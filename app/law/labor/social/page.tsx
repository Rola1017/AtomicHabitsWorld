import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜勞動社會保障｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜勞動社會保障的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/social",
  },
  openGraph: {
    title: "法律｜勞動法｜勞動社會保障｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜勞動社會保障的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/social",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function SocialLaborPage() {
  return (
    <CategoryLayout heroTitle={["社會法"]} heroLatin="Social law.">
      <LawWpCategoryPostList
        sitePathKey="labor/social"
        emptyLabel="目前尚無「社會法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
