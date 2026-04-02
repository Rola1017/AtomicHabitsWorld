import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"
import { DailySubcategoryNav } from "@/components/daily/daily-subcategory-nav"

export default function DailyLifeWisdomPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#101A3A] text-center">
        生活智慧王
      </h1>
      <DailySubcategoryNav />
      <DailyWpCategoryPostList
        siteCategoryPath="life-wisdom"
        wpCategorySlug="life-wisdom"
        emptyLabel="目前尚無「生活智慧王」文章，請稍後再試。"
      />
    </div>
  )
}
