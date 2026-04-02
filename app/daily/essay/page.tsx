import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"

export default function DailyEssayPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#101A3A] mb-4">隨筆</h1>
      <DailyWpCategoryPostList
        siteCategoryPath="essay"
        wpCategorySlug="essay"
        emptyLabel="目前尚無「隨筆」文章，請稍後再試。"
      />
    </div>
  )
}

