import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民事訴訟法｜AtomicHabitsWorld",
  description: "瀏覽法律｜民事訴訟法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil-procedure",
  },
  openGraph: {
    title: "法律｜民事訴訟法｜AtomicHabitsWorld",
    description: "瀏覽法律｜民事訴訟法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil-procedure",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function CivilProcedurePage() {
  return (
    <CategoryLayout
      heroTitle={["民事訴訟法"]}
      heroLatin="Civil procedure law."
    >
      <LawWpCategoryPostList
        sitePathKey="civil-procedure"
        emptyLabel="目前尚無「民事訴訟法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

