import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"

export default function DailyLifeWisdomPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#101A3A] mb-4">生活智慧王</h1>
      <DailyWpCategoryPostList
        siteCategoryPath="life-wisdom"
        wpCategorySlug="life-wisdom"
        emptyLabel="目前尚無「生活智慧王」文章，請稍後再試。"
      />
    </div>
  )
}
