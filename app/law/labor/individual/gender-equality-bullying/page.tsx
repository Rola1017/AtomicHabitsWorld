import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜個別勞動｜性別平等與職場霸凌｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜個別勞動｜性別平等與職場霸凌的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/individual/gender-equality-bullying",
  },
  openGraph: {
    title: "法律｜勞動法｜個別勞動｜性別平等與職場霸凌｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜個別勞動｜性別平等與職場霸凌的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/individual/gender-equality-bullying",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function GenderEqualityBullyingPage() {
  return (
    <CategoryLayout
      heroTitle={["性別平等與職場霸凌"]}
      heroLatin="Gender equality & workplace harassment."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/gender-equality-bullying"
        emptyLabel="目前尚無「性別平等與職場霸凌」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
