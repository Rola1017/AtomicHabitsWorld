import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜個別勞動｜解僱、資遣與退休｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜個別勞動｜解僱、資遣與退休的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/individual/termination-layoff-retirement",
  },
  openGraph: {
    title: "法律｜勞動法｜個別勞動｜解僱、資遣與退休｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜個別勞動｜解僱、資遣與退休的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/individual/termination-layoff-retirement",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function TerminationLayoffRetirementPage() {
  return (
    <CategoryLayout
      heroTitle={["終止契約、資遣與退休"]}
      heroLatin="Termination, layoff & retirement."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/termination-layoff-retirement"
        emptyLabel="目前尚無「終止契約、資遣與退休」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
