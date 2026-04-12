import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜繼承與特留分｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜繼承與特留分的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/inheritance-and-forced-heirship",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜繼承與特留分｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜繼承與特留分的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/inheritance-and-forced-heirship",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function InheritanceAndForcedHeirshipPage() {
  return (
    <CategoryLayout
      heroTitle={["遺產繼承與特留分實務"]}
      heroLatin="Inheritance & forced heirship."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/inheritance-and-forced-heirship"
        emptyLabel="目前尚無「遺產繼承與特留分實務」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
