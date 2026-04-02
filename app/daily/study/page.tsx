import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"

export default function DailyStudyPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#101A3A] mb-4">讀書</h1>
      <DailyWpCategoryPostList
        siteCategoryPath="study"
        wpCategorySlug="study"
        emptyLabel="目前尚無「讀書」文章，請稍後再試。"
      />
    </div>
  )
}

