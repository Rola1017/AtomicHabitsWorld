import Link from "next/link"
import { DailyWpCategoryPostList } from "@/components/daily/daily-wp-category-post-list"

export default function DailyPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#101A3A] mb-4">日常</h1>
        <p className="text-[#4b5563] mb-8">這裡先顯示 WP 新增的「讀書」與「隨筆」文章。</p>
      </div>

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

      {/* 快速入口 */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/daily/exam"
          className="rounded-full border border-[#101A3A]/15 bg-[rgba(255,226,210,.98)] px-6 py-2.5 text-[#101A3A] shadow-sm hover:opacity-90"
        >
          考試
        </Link>
        <Link
          href="/daily/life-wisdom"
          className="rounded-full border border-[#101A3A]/15 bg-[rgba(255,226,210,.98)] px-6 py-2.5 text-[#101A3A] shadow-sm hover:opacity-90"
        >
          生活智慧王
        </Link>
        <Link
          href="/daily/left-hand-writing"
          className="rounded-full border border-[#101A3A]/15 bg-[rgba(255,226,210,.98)] px-6 py-2.5 text-[#101A3A] shadow-sm hover:opacity-90"
        >
          左手訓練
        </Link>
      </div>
    </div>
  )
}
