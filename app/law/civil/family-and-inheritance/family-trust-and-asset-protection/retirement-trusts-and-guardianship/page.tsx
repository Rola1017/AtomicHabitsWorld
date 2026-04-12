import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜退休信託與監護規劃的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function RetirementTrustsAndGuardianshipPage() {
  return (
    <CategoryLayout
      heroTitle={["安養信託與意定監護"]}
      heroLatin="Retirement trusts & guardianship."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship"
        emptyLabel="目前尚無「安養信託與意定監護」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

