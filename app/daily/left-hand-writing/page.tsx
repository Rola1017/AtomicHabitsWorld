import { DailySupabaseCategoryPostList } from "@/components/daily/daily-supabase-category-post-list"
import { DailySubcategoryBar } from "@/components/daily/daily-subcategory-bar"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "每日精進｜左手書寫｜AtomicHabitsWorld",
  description: "瀏覽每日精進｜左手書寫的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/daily/left-hand-writing",
  },
  openGraph: {
    title: "每日精進｜左手書寫｜AtomicHabitsWorld",
    description: "瀏覽每日精進｜左手書寫的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/daily/left-hand-writing",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function DailyLeftHandWritingPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#101A3A] text-center">
        左手訓練
      </h1>
      <DailySubcategoryBar />
      <DailySupabaseCategoryPostList
        categorySub="left-hand-writing"
        listBase="/daily/left-hand-writing"
        emptyLabel="目前尚無「左手訓練」文章，請稍後再試。"
      />
    </div>
  )
}

