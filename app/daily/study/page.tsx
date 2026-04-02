import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"
import { DailySubcategoryBar } from "@/components/daily/daily-subcategory-bar"

export default function DailyStudyPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#101A3A] text-center">讀書</h1>
      <DailySubcategoryBar />
      <DailyWpCategoryPostList
        siteCategoryPath="study"
        wpCategorySlug="study"
        emptyLabel="目前尚無「讀書」文章，請稍後再試。"
      />
    </div>
  )
}

