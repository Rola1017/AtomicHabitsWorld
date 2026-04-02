"use client"

import { usePathname, useRouter } from "next/navigation"

import { DailySubcategoryNav } from "@/components/daily/daily-subcategory-nav"

const BACK_BUTTON_CLASS =
  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#101A3A]/15 bg-white/80 text-[#101A3A] shadow-sm ring-1 ring-black/5 hover:opacity-90 transition-opacity"

function parentPathFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length <= 1) return "/" // "/daily" → "/"
  return `/${segments.slice(0, -1).join("/")}`
}

export function DailySubcategoryBar() {
  const router = useRouter()
  const pathname = usePathname()

  const goToParent = () => {
    router.push(parentPathFromPathname(pathname))
  }

  return (
    <div className="flex items-center gap-4">
      <div className="min-w-0 flex-1">
        <DailySubcategoryNav />
      </div>
      <button type="button" className={BACK_BUTTON_CLASS} onClick={goToParent}>
        返回
      </button>
    </div>
  )
}

