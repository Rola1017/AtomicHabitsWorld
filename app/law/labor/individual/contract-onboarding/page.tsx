import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜個別勞動｜勞動契約與到職｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜個別勞動｜勞動契約與到職的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/individual/contract-onboarding",
  },
  openGraph: {
    title: "法律｜勞動法｜個別勞動｜勞動契約與到職｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜個別勞動｜勞動契約與到職的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/individual/contract-onboarding",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function ContractOnboardingPage() {
  return (
    <CategoryLayout
      heroTitle={["勞動契約與入職管理"]}
      heroLatin="Employment contract & onboarding."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/contract-onboarding"
        emptyLabel="目前尚無「勞動契約與入職管理」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
