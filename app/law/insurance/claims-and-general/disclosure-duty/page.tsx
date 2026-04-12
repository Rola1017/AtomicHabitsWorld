import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜理賠與保險通則｜告知義務｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜理賠與保險通則｜告知義務的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/claims-and-general/disclosure-duty",
  },
  openGraph: {
    title: "法律｜保險法｜理賠與保險通則｜告知義務｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜理賠與保險通則｜告知義務的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/claims-and-general/disclosure-duty",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function DisclosureDutyPage() {
  return (
    <CategoryLayout heroTitle={["告知義務"]} heroLatin="Duty of disclosure.">
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general/disclosure-duty"
        emptyLabel="目前尚無「告知義務」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
