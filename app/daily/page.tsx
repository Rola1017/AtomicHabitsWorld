import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"
import { DailySubcategoryBar } from "@/components/daily/daily-subcategory-bar"

export default function DailyPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* 子分類按鈕：置於文章列表上方 */}
      <DailySubcategoryBar />

      <section>
        <h2 className="text-xl font-bold text-[#101A3A] mb-4 text-center">讀書</h2>
        <DailyWpCategoryPostList
          siteCategoryPath="study"
          wpCategorySlug="study"
          emptyLabel="目前尚無「讀書」文章，請稍後再試。"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#101A3A] mb-4 text-center">考試</h2>
        <DailyWpCategoryPostList
          siteCategoryPath="exam"
          wpCategorySlug="exam"
          emptyLabel="目前尚無「考試」文章，請稍後再試。"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#101A3A] mb-4 text-center">隨筆</h2>
        <DailyWpCategoryPostList
          siteCategoryPath="essay"
          wpCategorySlug="essay"
          emptyLabel="目前尚無「隨筆」文章，請稍後再試。"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#101A3A] mb-4 text-center">生活智慧王</h2>
        <DailyWpCategoryPostList
          siteCategoryPath="life-wisdom"
          wpCategorySlug="life-wisdom"
          emptyLabel="目前尚無「生活智慧王」文章，請稍後再試。"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#101A3A] mb-4 text-center">左手訓練</h2>
        <DailyWpCategoryPostList
          siteCategoryPath="left-hand-writing"
          wpCategorySlug="left-hand-writing"
          emptyLabel="目前尚無「左手訓練」文章，請稍後再試。"
        />
      </section>
    </div>
  )
}
