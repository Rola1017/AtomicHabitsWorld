import { LawCertSection } from "@/components/law/law-cert-section"

const ABOUT_BG = "/about-diamond-bg.png"

export function LawAboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-28">
      <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85),inset_0_0_0_1px_rgba(255,255,255,0.12),0_20px_50px_-12px_rgba(255,255,255,0.35)]">
        {/* 鑽石切面背景圖 */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ABOUT_BG})` }}
          aria-hidden
        />
        {/* 淡漸層：讓文字好讀、仍透出底圖 */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/55 via-white/35 to-slate-200/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-10 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-95"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-[1.6] lg:max-w-[65%]">
            <h2 className="mb-4 text-xl font-bold text-[#1E293B] drop-shadow-sm sm:text-2xl">
              關於本站
            </h2>
            <p className="text-base leading-relaxed text-[#334155] drop-shadow-sm sm:text-[17px]">
              相信最好的服務來自於「量身打造」，而這需要深厚的知識庫作為基礎。透過拆解書籍、研究新科技來提升自己，目標是將繁瑣的知識「遊戲化」，幫助更多人理解自身權益。
            </p>
          </div>

          <LawCertSection className="rounded-2xl lg:w-[min(100%,38%)] lg:max-w-sm" />
        </div>
      </div>
    </section>
  )
}
