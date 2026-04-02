import Link from "next/link"

const DAILY_SUBCATEGORY_LINK_CLASS =
  "rounded-full border border-[#101A3A]/15 bg-[rgba(255,226,210,.98)] px-6 py-2.5 text-[#101A3A] shadow-sm hover:opacity-90"

export function DailySubcategoryNav() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Link href="/daily/exam" className={DAILY_SUBCATEGORY_LINK_CLASS}>
        考試
      </Link>
      <Link href="/daily/life-wisdom" className={DAILY_SUBCATEGORY_LINK_CLASS}>
        生活智慧王
      </Link>
      <Link
        href="/daily/left-hand-writing"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
      >
        左手訓練
      </Link>
      <Link href="/daily/study" className={DAILY_SUBCATEGORY_LINK_CLASS}>
        讀書
      </Link>
      <Link href="/daily/essay" className={DAILY_SUBCATEGORY_LINK_CLASS}>
        隨筆
      </Link>
    </div>
  )
}

