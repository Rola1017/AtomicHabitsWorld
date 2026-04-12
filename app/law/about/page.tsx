import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { LawHeader } from "@/components/law/law-header"
import { fetchWpPageByKeyword } from "@/lib/wp-pages"

export const metadata: Metadata = {
  title: "關於本站-法律｜AtomicHabitsWorld 每天一點點",
  description: "關於本站-法律完整內容。",
  alternates: {
    canonical: "/law/about",
  },
}

const FALLBACK_LAW_ABOUT =
  "相信最好的服務來自於「量身打造」，而這需要深厚的知識庫作為基礎。透過拆解書籍、研究新科技來提升自己，目標是將繁瑣的知識「遊戲化」，幫助更多人理解自身權益。"
const LAW_BACKGROUND_IMAGE = "/law-category-background.jpg"

export default async function LawAboutPage() {
  const page = await fetchWpPageByKeyword("關於本站-法律")

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-30 bg-[#E8E4DC]" />
      <div
        className="fixed inset-0 -z-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${LAW_BACKGROUND_IMAGE})` }}
      />
      <div className="fixed inset-0 -z-10 bg-[#E8E4DC]/45" />

      <LawHeader />

      <main className="relative py-8 sm:py-12 md:py-16">
        <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <article className="rounded-2xl border border-[#D1C7B7] bg-white/85 p-5 shadow-sm sm:p-8">
            <h1 className="mb-5 text-center text-2xl font-bold text-[#101A3A]">
              關於本站-法律
            </h1>
            {page?.contentHtml ? (
              <div
                className="wp-content prose prose-sm max-w-none leading-relaxed text-[#4b5563]"
                dangerouslySetInnerHTML={{ __html: page.contentHtml }}
              />
            ) : (
              <p className="text-base leading-relaxed text-[#4b5563]">
                {FALLBACK_LAW_ABOUT}
              </p>
            )}
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
