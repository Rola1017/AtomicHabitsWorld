import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"

export default function DailyExamPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#101A3A] mb-4">考試</h1>
      <DailyWpCategoryPostList
        siteCategoryPath="exam"
        wpCategorySlug="exam"
        emptyLabel="目前尚無「考試」文章，請稍後再試。"
      />
    </div>
  )
}
