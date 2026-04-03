import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜保險法｜金融消費者保護｜AtomicHabitsWorld",
  description: "瀏覽法律｜保險法｜金融消費者保護的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/insurance/financial-consumer-protection",
  },
  openGraph: {
    title: "法律｜保險法｜金融消費者保護｜AtomicHabitsWorld",
    description: "瀏覽法律｜保險法｜金融消費者保護的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/insurance/financial-consumer-protection",
    siteName: "AtomicHabitsWorld 每天進步一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function FinancialConsumerProtectionPage() {
  return (
    <CategoryLayout
      heroTitle={["金融消費者保護與法規"]}
      heroLatin="Financial consumer protection & regulations."
    >
      <LawWpCategoryPostList
        sitePathKey="insurance/financial-consumer-protection"
        emptyLabel="目前尚無「金融消費者保護與法規」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
