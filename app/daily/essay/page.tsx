import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"
import { DailySubcategoryBar } from "@/components/daily/daily-subcategory-bar"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "每日精進｜隨筆｜AtomicHabitsWorld",
  description: "瀏覽每日精進｜隨筆的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/daily/essay",
  },
  openGraph: {
    title: "每日精進｜隨筆｜AtomicHabitsWorld",
    description: "瀏覽每日精進｜隨筆的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/daily/essay",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function DailyEssayPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#101A3A] text-center">隨筆</h1>
      <DailySubcategoryBar />
      <DailyWpCategoryPostList
        siteCategoryPath="essay"
        wpCategorySlug="essay"
        emptyLabel="目前尚無「隨筆」文章，請稍後再試。"
      />
    </div>
  )
}

