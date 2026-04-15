import type { Metadata } from "next"

import { fetchWpPageByKeyword } from "@/lib/wp-pages"

export const metadata: Metadata = {
  title: "關於本站｜AtomicHabitsWorld 每天一點點",
  description: "關於本站完整內容。",
  alternates: {
    canonical: "/daily/about",
  },
}

const FALLBACK_ABOUT =
  "歡迎來到 AtomicHabitsWorld 每天一點點。本站把法律、學習與生活知識拆成可實作的小步驟，幫助你用更低門檻理解重點、穩定進步。"

function normalizeWpHtmlTypography(html: string): string {
  return html
    .replace(/&rsquo;|&#8217;|&#x2019;/gi, "'")
    .replace(/[\u2019\uFF07]/g, "'")
    .replace(/([A-Za-z])\s*'\s*([A-Za-z])/g, "$1'$2")
}

export default async function DailyAboutPage() {
  const page = await fetchWpPageByKeyword("關於本站")

  return (
    <section className="mx-auto w-full max-w-none px-6 py-8 sm:px-10 sm:py-10">
      <article className="rounded-2xl border border-[#D1C7B7] bg-white/80 p-5 shadow-sm sm:p-8">
        <h1 className="mb-5 text-center text-2xl font-bold text-[#101A3A]">關於本站</h1>
        {page?.contentHtml ? (
          <div
            className="wp-content wp-page-content max-w-none text-[#4b5563]"
            dangerouslySetInnerHTML={{
              __html: normalizeWpHtmlTypography(page.contentHtml),
            }}
          />
        ) : (
          <p className="text-base leading-relaxed text-[#4b5563]">{FALLBACK_ABOUT}</p>
        )}
      </article>
    </section>
  )
}
