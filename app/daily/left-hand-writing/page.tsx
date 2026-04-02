import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"

export default function DailyLeftHandWritingPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#101A3A] mb-4">左手訓練</h1>
      <DailyWpCategoryPostList
        siteCategoryPath="left-hand-writing"
        wpCategorySlug="left-hand-writing"
        emptyLabel="目前尚無「左手訓練」文章，請稍後再試。"
      />
    </div>
  )
}

