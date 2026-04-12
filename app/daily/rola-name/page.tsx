import type { Metadata } from "next"

import { fetchWpPageByKeyword } from "@/lib/wp-pages"

export const metadata: Metadata = {
  title: "Rola這個名字｜AtomicHabitsWorld 每天一點點",
  description: "Rola這個名字的完整內容。",
  alternates: {
    canonical: "/daily/rola-name",
  },
}

const FALLBACK_NAME =
  "Rola 代表的是「滾動前進」的節奏：不求一步到位，但每天都往前。這也是本站最核心的信念——持續累積、逐步質變。希望你在這裡看到的不只是資訊，而是可以落地實踐、陪你走長路的方法。"

function normalizeWpHtmlTypography(html: string): string {
  return html
    .replace(/&rsquo;|&#8217;|&#x2019;/gi, "'")
    .replace(/[\u2019\uFF07]/g, "'")
    .replace(/([A-Za-z])\s*'\s*([A-Za-z])/g, "$1'$2")
}

export default async function DailyRolaNamePage() {
  const page = await fetchWpPageByKeyword("Rola這個名字")

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-4 sm:py-10">
      <article className="rounded-2xl border border-[#D1C7B7] bg-white/80 p-5 shadow-sm sm:p-8">
        <h1 className="mb-5 text-center text-2xl font-bold text-[#101A3A]">Rola這個名字</h1>
        {page?.contentHtml ? (
          <div
            className="wp-content prose prose-sm max-w-none leading-relaxed text-[#4b5563]"
            dangerouslySetInnerHTML={{
              __html: normalizeWpHtmlTypography(page.contentHtml),
            }}
          />
        ) : (
          <p className="text-base leading-relaxed text-[#4b5563]">{FALLBACK_NAME}</p>
        )}
      </article>
    </section>
  )
}

