import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜勞動法｜集體勞資程序｜勞資爭議調解｜AtomicHabitsWorld",
  description: "瀏覽法律｜勞動法｜集體勞資程序｜勞資爭議調解的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/labor/collective-procedure/dispute-mediation",
  },
  openGraph: {
    title: "法律｜勞動法｜集體勞資程序｜勞資爭議調解｜AtomicHabitsWorld",
    description: "瀏覽法律｜勞動法｜集體勞資程序｜勞資爭議調解的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/labor/collective-procedure/dispute-mediation",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function DisputeMediationPage() {
  return (
    <CategoryLayout
      heroTitle={["勞資爭議處理與調解程序"]}
      heroLatin="Labor dispute resolution & mediation."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/collective-procedure/dispute-mediation"
        emptyLabel="目前尚無「勞資爭議處理與調解程序」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
