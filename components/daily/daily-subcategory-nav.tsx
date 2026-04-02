import Link from "next/link"

const DAILY_SUBCATEGORY_LINK_CLASS =
  "rounded-full border-4 px-6 py-2.5 shadow-sm hover:opacity-90 transition-opacity"

const PASTEL_MIX_WITH_WHITE = 0.88

function parseHexRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleaned = hex.replace("#", "").trim()
  if (cleaned.length !== 6 || !/^[0-9a-fA-F]+$/.test(cleaned)) return null
  return {
    r: parseInt(cleaned.slice(0, 2), 16),
    g: parseInt(cleaned.slice(2, 4), 16),
    b: parseInt(cleaned.slice(4, 6), 16),
  }
}

function mixWithWhite(hex: string, whiteRatio: number): string {
  const rgb = parseHexRgb(hex)
  if (!rgb) return "#FFFFFF"
  const t = Math.min(1, Math.max(0, whiteRatio))
  const r = Math.round(rgb.r + (255 - rgb.r) * t)
  const g = Math.round(rgb.g + (255 - rgb.g) * t)
  const b = Math.round(rgb.b + (255 - rgb.b) * t)
  return `rgb(${r}, ${g}, ${b})`
}

export function DailySubcategoryNav() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/daily/study"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{
          borderColor: "#2F7EDB",
          color: "#2F7EDB",
          backgroundColor: mixWithWhite("#2F7EDB", PASTEL_MIX_WITH_WHITE),
        }}
      >
        讀書
      </Link>

      <Link
        href="/daily/exam"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{
          borderColor: "#C85A5A",
          color: "#C85A5A",
          backgroundColor: mixWithWhite("#C85A5A", PASTEL_MIX_WITH_WHITE),
        }}
      >
        考試
      </Link>

      <Link
        href="/daily/essay"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{
          borderColor: "#E5A54A",
          color: "#E5A54A",
          backgroundColor: mixWithWhite("#E5A54A", PASTEL_MIX_WITH_WHITE),
        }}
      >
        隨筆
      </Link>

      <Link
        href="/daily/left-hand-writing"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{
          borderColor: "#22A79A",
          color: "#22A79A",
          backgroundColor: mixWithWhite("#22A79A", PASTEL_MIX_WITH_WHITE),
        }}
      >
        左手訓練
      </Link>

      <Link
        href="/daily/life-wisdom"
        className={DAILY_SUBCATEGORY_LINK_CLASS}
        style={{
          borderColor: "#7C6EE6",
          color: "#7C6EE6",
          backgroundColor: mixWithWhite("#7C6EE6", PASTEL_MIX_WITH_WHITE),
        }}
      >
        生活智慧王
      </Link>
    </div>
  )
}

