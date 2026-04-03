import Image from "next/image"

import { cn } from "@/lib/utils"

const CERT_BG = "/cert-diamond-bg.png"
const CERT_STAR_ICON = "/cert-star.png"
const CERT_PEN_ICON = "/cert-pen.png"

/** 證照區（可放於側欄或「關於本站」右側） */
export function LawCertSection({ className }: { className?: string }) {
  return (
    <section
      id="skills"
      className={cn(
        "relative flex w-full flex-col overflow-hidden border border-amber-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_8px_24px_-8px_rgba(120,53,15,0.35)] sm:gap-7",
        className
      )}
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

      <div className="relative z-10 flex flex-col gap-6 p-5 sm:gap-7 sm:p-6">
        <div className="flex flex-col gap-3">
          <div
            className="w-full rounded-full border border-amber-400/90 bg-gradient-to-r from-amber-200/95 to-orange-100/95 px-4 py-2.5 text-center text-sm font-semibold tracking-wide text-amber-950 shadow-md ring-1 ring-amber-500/40"
            role="presentation"
          >
            證照考取中
          </div>
          <p className="text-base leading-relaxed text-slate-800 drop-shadow-sm">
            <Image
              src={CERT_PEN_ICON}
              alt=""
              aria-hidden
              width={20}
              height={20}
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
                <Image
                  src={CERT_STAR_ICON}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                />
                獲得1ｘｘｘｘｘｘｘｘｘｘ
              </p>
              <p>
                <Image
                  src={CERT_STAR_ICON}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                />
                獲得2ｘｘｘｘｘｘｘｘｘｘ
              </p>
              <p>
                <Image
                  src={CERT_STAR_ICON}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                />
                獲得3ｘｘｘｘｘｘｘｘｘｘ
              </p>
              <p>
                <Image
                  src={CERT_STAR_ICON}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className="mr-1 inline-block h-5 w-5 align-[-2px] drop-shadow-[0_0_6px_rgba(255,225,120,0.95)]"
                />
                獲得4ｘｘｘｘｘｘｘｘｘｘ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
