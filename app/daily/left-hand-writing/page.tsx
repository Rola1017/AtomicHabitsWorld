import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"
import { DailySubcategoryNav } from "@/components/daily/daily-subcategory-nav"

export default function DailyLeftHandWritingPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#101A3A] text-center">
        左手訓練
      </h1>
      <DailySubcategoryNav />
      <DailyWpCategoryPostList
        siteCategoryPath="left-hand-writing"
        wpCategorySlug="left-hand-writing"
        emptyLabel="目前尚無「左手訓練」文章，請稍後再試。"
      />
    </div>
  )
}

