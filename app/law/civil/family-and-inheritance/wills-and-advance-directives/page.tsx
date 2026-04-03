import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜遺囑與預立指示｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜遺囑與預立指示的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/wills-and-advance-directives",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜遺囑與預立指示｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜遺囑與預立指示的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/wills-and-advance-directives",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function WillsAndAdvanceDirectivesPage() {
  return (
    <CategoryLayout
      heroTitle={["遺囑撰擬與預立醫療決定"]}
      heroLatin="Wills & advance directives."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/wills-and-advance-directives"
        emptyLabel="目前尚無「遺囑撰擬與預立醫療決定」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
