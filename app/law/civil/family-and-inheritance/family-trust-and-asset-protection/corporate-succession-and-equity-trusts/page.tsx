import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜企業傳承與股權信託｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜企業傳承與股權信託的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/corporate-succession-and-equity-trusts",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜企業傳承與股權信託｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜企業傳承與股權信託的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/corporate-succession-and-equity-trusts",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function CorporateSuccessionAndEquityTrustsPage() {
  return (
    <CategoryLayout
      heroTitle={["企業傳承與股權信託"]}
      heroLatin="Corporate succession & equity trusts."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection/corporate-succession-and-equity-trusts"
        emptyLabel="目前尚無「企業傳承與股權信託」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

