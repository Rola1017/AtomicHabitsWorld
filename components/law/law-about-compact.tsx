import Link from "next/link"

/** 與「關於本站」大區塊相同：鑽石切面底圖 `about-diamond-bg.png` */
const ABOUT_COMPACT_BG = "/about-diamond-bg.png"

/** 文章頁左欄底部：精簡「關於本站」，高度較扁 */
export function LawAboutCompact() {
  return (
    <section
      id="about"
      aria-labelledby="about-compact-heading"
      className="relative scroll-mt-28 overflow-hidden rounded-none border border-white/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85),0_8px_24px_-8px_rgba(148,163,184,0.35)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ABOUT_COMPACT_BG})` }}
        aria-hidden
      />
      {/* 與 LawAboutSection 相同：淡漸層，文字好讀、仍透出底圖 */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/55 via-white/35 to-slate-200/30"
        aria-hidden
      />
      <div className="relative z-10 px-5 py-4 sm:px-6 sm:py-5">
        <h2
          id="about-compact-heading"
          className="mb-2 text-base font-bold text-[#1E293B] drop-shadow-sm sm:text-lg"
        >
          <Link
            href="/law/about"
            className="underline-offset-4 transition-colors hover:text-[#0f172a] hover:underline"
          >
            關於本站-法律
          </Link>
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-[#334155] drop-shadow-sm sm:text-[15px]">
          相信最好的服務來自於「量身打造」，而這需要深厚的知識庫作為基礎。透過拆解書籍、研究新科技來提升自己，目標是將繁瑣的知識「遊戲化」，幫助更多人理解自身權益。
        </p>
      </div>
    </section>
  )
}
