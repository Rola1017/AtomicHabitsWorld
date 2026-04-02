import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"
import { DailySubcategoryNav } from "@/components/daily/daily-subcategory-nav"

export default function DailyEssayPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#101A3A] text-center">隨筆</h1>
      <DailySubcategoryNav />
      <DailyWpCategoryPostList
        siteCategoryPath="essay"
        wpCategorySlug="essay"
        emptyLabel="目前尚無「隨筆」文章，請稍後再試。"
      />
    </div>
  )
}

