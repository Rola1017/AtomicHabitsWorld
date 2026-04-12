import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export const metadata: Metadata = {
  title: "法律總覽｜AtomicHabitsWorld 每天一點點",
  description:
    "法律總覽收錄勞動社會法、保險法、民法、行政法、刑法與民事訴訟法文章，提供實務導向的重點整理與案例脈絡。",
  alternates: {
    canonical: "/law",
  },
  openGraph: {
    title: "法律總覽｜AtomicHabitsWorld 每天一點點",
    description:
      "法律總覽收錄勞動社會法、保險法、民法、行政法、刑法與民事訴訟法文章，提供實務導向的重點整理與案例脈絡。",
    url: "/law",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function LawPage() {
  return (
    <CategoryLayout heroTitle={["法律．權益．救濟"]} heroLatin="Ubi ius, ibi remedium">
      <LawWpCategoryPostList
        sitePathKey="__law__"
        emptyLabel="目前尚無文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
