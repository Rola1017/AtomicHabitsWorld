import Link from "next/link"

const DAILY_SUBCATEGORY_LINK_CLASS =
  "rounded-full border-2 bg-white/80 px-6 py-2.5 shadow-sm hover:opacity-90 transition-opacity"

export function DailySubcategoryNav() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/daily/exam"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{ borderColor: "#E5A54A", color: "#E5A54A" }}
      >
        考試
      </Link>
      <Link
        href="/daily/life-wisdom"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{ borderColor: "#7C6EE6", color: "#7C6EE6" }}
      >
        生活智慧王
      </Link>
      <Link
        href="/daily/left-hand-writing"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{ borderColor: "#22A79A", color: "#22A79A" }}
      >
        左手訓練
      </Link>
      <Link
        href="/daily/study"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{ borderColor: "#2F7EDB", color: "#2F7EDB" }}
      >
        讀書
      </Link>
      <Link
        href="/daily/essay"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{ borderColor: "#D65B7C", color: "#D65B7C" }}
      >
        隨筆
      </Link>
    </div>
  )
}

