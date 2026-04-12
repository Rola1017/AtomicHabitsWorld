import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜勞動社會保障｜國民年金與社福｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜勞動社會保障｜國民年金與社福的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/social/national-pension-welfare",
  },
  openGraph: {
    title: "法律｜勞動法｜勞動社會保障｜國民年金與社福｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜勞動社會保障｜國民年金與社福的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/social/national-pension-welfare",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function NationalPensionWelfarePage() {
  return (
    <CategoryLayout
      heroTitle={["國民年金與社會福利"]}
      heroLatin="National pension & social welfare."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/national-pension-welfare"
        emptyLabel="目前尚無「國民年金與社會福利」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
