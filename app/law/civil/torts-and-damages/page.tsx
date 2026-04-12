import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜侵權與損害賠償｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜侵權與損害賠償的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/torts-and-damages",
  },
  openGraph: {
    title: "法律｜民法｜侵權與損害賠償｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜侵權與損害賠償的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/torts-and-damages",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function TortsAndDamagesPage() {
  return (
    <CategoryLayout
      heroTitle={["侵權行為與損害賠償"]}
      heroLatin="Torts & damages."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/torts-and-damages"
        emptyLabel="目前尚無「侵權行為與損害賠償」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
