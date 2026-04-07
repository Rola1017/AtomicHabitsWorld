import Link from "next/link"

import { fetchWpPageByKeyword, wpHtmlToExcerpt } from "@/lib/wp-pages"

const FALLBACK_STORY =
  "我相信真正有價值的內容，不是把知識堆得更高，而是把複雜問題拆成可執行的小步驟。AtomicHabitsWorld 每天一點點，想做的就是把法律、學習與生活的關鍵觀念整理成「今天就能用」的形式，讓每個人都能在忙碌中持續成長。"

const FALLBACK_NAME =
  "Rola 代表的是「滾動前進」的節奏：不求一步到位，但每天都往前。這也是本站最核心的信念——持續累積、逐步質變。希望你在這裡看到的不只是資訊，而是可以落地實踐、陪你走長路的方法。"

export async function DailyFounderSection() {
  const [storyPage, namePage] = await Promise.all([
    fetchWpPageByKeyword("創辦人的理念與故事"),
    fetchWpPageByKeyword("Rola這個名字"),
  ])
  const storyExcerpt = wpHtmlToExcerpt(storyPage?.contentHtml, 120)
  const nameExcerpt = wpHtmlToExcerpt(namePage?.contentHtml, 110)

  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div
          className="rounded-[26px] border p-6 shadow-sm sm:p-8"
          style={{
            background: "linear-gradient(135deg, #FFF6DE 0%, #FDEDE4 45%, #FFFFFF 100%)",
            borderColor: "rgba(243, 210, 122, 0.9)",
          }}
        >
          <div className="space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-[#101A3A]">
                <Link
                  href="/daily/founder-story"
                  className="cursor-pointer hover:text-[#2d3a5c] hover:underline underline-offset-4 transition-colors"
                >
                  創辦人的理念與故事
                </Link>
              </h2>
              <p className="text-base leading-relaxed text-[#4b5563]">
                {storyExcerpt ?? FALLBACK_STORY}
              </p>
            </div>

            <div
              className="rounded-2xl border px-4 py-4 sm:px-5"
              style={{
                background: "linear-gradient(135deg, #EAF4FF 0%, #F5F0FF 100%)",
                borderColor: "rgba(147, 197, 253, 0.7)",
              }}
            >
              <h3 className="mb-3 text-xl font-semibold text-[#101A3A]">
                <Link
                  href="/daily/rola-name"
                  className="cursor-pointer hover:text-[#2d3a5c] hover:underline underline-offset-4 transition-colors"
                >
                  Rola這個名字
                </Link>
              </h3>
              <p className="text-base leading-relaxed text-[#4b5563]">
                {nameExcerpt ?? FALLBACK_NAME}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
