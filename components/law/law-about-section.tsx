const ABOUT_BG = "/about-diamond-bg.png"
const CERT_BG = "/cert-diamond-bg.png"
const CERT_STAR_ICON = "/cert-star.png"
const CERT_PEN_ICON = "/cert-pen.png"

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

          <div
            id="skills"
            className="relative flex w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-amber-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_8px_24px_-8px_rgba(120,53,15,0.35)] sm:gap-7 lg:w-[min(100%,38%)] lg:max-w-sm"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${CERT_BG})` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50/45 via-white/25 to-amber-950/35"
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-6 p-6 sm:gap-7">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full rounded-full border border-amber-400/90 bg-gradient-to-r from-amber-200/95 to-orange-100/95 px-4 py-2.5 text-center text-sm font-semibold tracking-wide text-amber-950 shadow-md ring-1 ring-amber-500/40"
                  role="presentation"
                >
                  證照考取中
                </div>
                <p className="text-base leading-relaxed text-slate-800 drop-shadow-sm">
                  <img
                    src={CERT_PEN_ICON}
                    alt=""
                    aria-hidden
                    className="mr-1 inline-block h-5 w-5 rounded-sm align-[-1px] object-cover"
                  />
                  勞健保暨勞動法規管理師
                </p>
              </div>

              <div className="border-t border-amber-900/20 pt-6">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full rounded-full border border-blue-400/90 bg-gradient-to-r from-blue-200/95 to-sky-100/95 px-4 py-2.5 text-center text-sm font-semibold tracking-wide text-blue-950 shadow-md ring-1 ring-blue-400/40"
                    role="presentation"
                  >
                    擁有的證照
                  </div>
                  <div className="space-y-1.5 text-base leading-relaxed text-slate-800 drop-shadow-sm">
                    <p>
                      <img
                        src={CERT_STAR_ICON}
                        alt=""
                        aria-hidden
                        className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                      />
                      獲得1ｘｘｘｘｘｘｘｘｘｘ
                    </p>
                    <p>
                      <img
                        src={CERT_STAR_ICON}
                        alt=""
                        aria-hidden
                        className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                      />
                      獲得2ｘｘｘｘｘｘｘｘｘｘ
                    </p>
                    <p>
                      <img
                        src={CERT_STAR_ICON}
                        alt=""
                        aria-hidden
                        className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                      />
                      獲得3ｘｘｘｘｘｘｘｘｘｘ
                    </p>
                    <p>
                      <img
                        src={CERT_STAR_ICON}
                        alt=""
                        aria-hidden
                        className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                      />
                      獲得4ｘｘｘｘｘｘｘｘｘｘ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
