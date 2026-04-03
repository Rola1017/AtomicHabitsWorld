import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"
import { DailySubcategoryBar } from "@/components/daily/daily-subcategory-bar"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "每日精進｜考試｜AtomicHabitsWorld",
  description: "瀏覽每日精進｜考試的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/daily/exam",
  },
  openGraph: {
    title: "每日精進｜考試｜AtomicHabitsWorld",
    description: "瀏覽每日精進｜考試的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/daily/exam",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function DailyExamPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#101A3A] text-center">考試</h1>
      <DailySubcategoryBar />
      <DailyWpCategoryPostList
        siteCategoryPath="exam"
        wpCategorySlug="exam"
        emptyLabel="目前尚無「考試」文章，請稍後再試。"
      />
    </div>
  )
}
