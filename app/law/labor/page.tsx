import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export const metadata: Metadata = {
  title: "勞動社會法｜AtomicHabitsWorld 每天一點點",
  description:
    "勞動社會法專區整理勞動契約、工時工資、資遣退休、職災與社會保險等核心議題，協助你快速理解權利義務與救濟方向。",
  alternates: {
    canonical: "/law/labor",
  },
  openGraph: {
    title: "勞動社會法｜AtomicHabitsWorld 每天一點點",
    description:
      "勞動社會法專區整理勞動契約、工時工資、資遣退休、職災與社會保險等核心議題，協助你快速理解權利義務與救濟方向。",
    url: "/law/labor",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function LaborPage() {
  return (
    <CategoryLayout
      heroTitle={[
        "1948 年《世界人權宣言》第 22 條：",
        "每個人都有獲得社會安全保障的權利",
      ]}
      heroLatin="Everyone, as a member of society, has the right to social security."
    >
      <LawWpCategoryPostList
        sitePathKey="labor"
        emptyLabel="目前尚無「勞動社會法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
