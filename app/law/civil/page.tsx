import type { Metadata } from "next"

import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export const metadata: Metadata = {
  title: "民法｜AtomicHabitsWorld 每天一點點",
  description:
    "民法專區涵蓋契約與債權、親屬繼承、侵權損害與物權不動產等主題，幫你建立清楚的民事法律判斷架構。",
  alternates: {
    canonical: "/law/civil",
  },
  openGraph: {
    title: "民法｜AtomicHabitsWorld 每天一點點",
    description:
      "民法專區涵蓋契約與債權、親屬繼承、侵權損害與物權不動產等主題，幫你建立清楚的民事法律判斷架構。",
    url: "/law/civil",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function CivilPage() {
  return (
    <CategoryLayout heroTitle={["民法"]} heroLatin="Civil law.">
      <LawWpCategoryPostList
        sitePathKey="civil"
        emptyLabel="目前尚無「民法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
