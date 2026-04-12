import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜集體勞資程序｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜集體勞資程序的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/collective-procedure",
  },
  openGraph: {
    title: "法律｜勞動法｜集體勞資程序｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜集體勞資程序的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/collective-procedure",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function CollectiveLaborProcedurePage() {
  return (
    <CategoryLayout
      heroTitle={["集體勞動法&程序法"]}
      heroLatin="Collective labor & procedure law."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/collective-procedure"
        emptyLabel="目前尚無「集體勞動法&程序法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
