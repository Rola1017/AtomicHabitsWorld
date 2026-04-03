import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜集體勞資程序｜行政救濟與勞檢｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜集體勞資程序｜行政救濟與勞檢的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/collective-procedure/admin-remedies-labor-inspection",
  },
  openGraph: {
    title: "法律｜勞動法｜集體勞資程序｜行政救濟與勞檢｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜集體勞資程序｜行政救濟與勞檢的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/collective-procedure/admin-remedies-labor-inspection",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function AdminRemediesLaborInspectionPage() {
  return (
    <CategoryLayout
      heroTitle={["行政救濟與勞檢應對"]}
      heroLatin="Administrative remedies & labor inspection."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/collective-procedure/admin-remedies-labor-inspection"
        emptyLabel="目前尚無「行政救濟與勞檢應對」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
