import type { Metadata } from "next"

import { fetchWpPageByKeyword } from "@/lib/wp-pages"

export const metadata: Metadata = {
  title: "創辦人的理念與故事｜AtomicHabitsWorld 每天進步一點點",
  description: "創辦人的理念與故事完整內容。",
  alternates: {
    canonical: "/daily/founder-story",
  },
}

const FALLBACK_STORY =
  "我相信真正有價值的內容，不是把知識堆得更高，而是把複雜問題拆成可執行的小步驟。AtomicHabitsWorld 每天一點點，想做的就是把法律、學習與生活的關鍵觀念整理成「今天就能用」的形式，讓每個人都能在忙碌中持續成長。"

export default async function DailyFounderStoryPage() {
  const page = await fetchWpPageByKeyword("創辦人的理念與故事")

  return (
    <section className="mx-auto w-full max-w-none px-6 py-8 sm:px-10 sm:py-10">
      <article className="rounded-2xl border border-[#D1C7B7] bg-white/80 p-5 shadow-sm sm:p-8">
        <h1 className="mb-5 text-center text-2xl font-bold text-[#101A3A]">創辦人的理念與故事</h1>
        {page?.contentHtml ? (
          <div
            className="wp-content prose prose-sm max-w-none leading-relaxed text-[#4b5563]"
            dangerouslySetInnerHTML={{ __html: page.contentHtml }}
          />
        ) : (
          <p className="text-base leading-relaxed text-[#4b5563]">{FALLBACK_STORY}</p>
        )}
      </article>
    </section>
  )
}

