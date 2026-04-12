import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜勞動社會保障｜勞工保險｜勞保制度｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜勞動社會保障｜勞工保險｜勞保制度的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/social/labor-insurance/labor-insurance1",
  },
  openGraph: {
    title: "法律｜勞動法｜勞動社會保障｜勞工保險｜勞保制度｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜勞動社會保障｜勞工保險｜勞保制度的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/social/labor-insurance/labor-insurance1",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function LaborInsurance1Page() {
  return (
    <CategoryLayout heroTitle={["勞保1"]} heroLatin="Labor insurance · subcategory.">
      <LawWpCategoryPostList
        sitePathKey="labor/social/labor-insurance/labor-insurance1"
        emptyLabel="目前尚無「勞保1」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
