import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜契約與債編｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜契約與債編的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/contracts-and-obligations",
  },
  openGraph: {
    title: "法律｜民法｜契約與債編｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜契約與債編的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/contracts-and-obligations",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function ContractsAndObligationsPage() {
  return (
    <CategoryLayout
      heroTitle={["契約法與債權實務"]}
      heroLatin="Contracts & obligations in practice."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/contracts-and-obligations"
        emptyLabel="目前尚無「契約法與債權實務」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
