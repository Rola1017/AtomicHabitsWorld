import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜勞動社會保障｜全民健保｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜勞動社會保障｜全民健保的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/social/nhi",
  },
  openGraph: {
    title: "法律｜勞動法｜勞動社會保障｜全民健保｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜勞動社會保障｜全民健保的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/social/nhi",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function NhiPage() {
  return (
    <CategoryLayout
      heroTitle={["全民健保與二代健保"]}
      heroLatin="National Health Insurance."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/nhi"
        emptyLabel="目前尚無「全民健保與二代健保」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
