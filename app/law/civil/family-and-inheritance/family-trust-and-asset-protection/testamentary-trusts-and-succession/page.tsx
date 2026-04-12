import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜遺囑信託與傳承｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜遺囑信託與傳承的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/testamentary-trusts-and-succession",
  },
  openGraph: {
    title: "法律｜民法｜親屬與繼承｜家族信託與資產保全｜遺囑信託與傳承｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜親屬與繼承｜家族信託與資產保全｜遺囑信託與傳承的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/family-and-inheritance/family-trust-and-asset-protection/testamentary-trusts-and-succession",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function TestamentaryTrustsAndSuccessionPage() {
  return (
    <CategoryLayout
      heroTitle={["遺囑信託與身後傳承"]}
      heroLatin="Testamentary trusts & succession."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection/testamentary-trusts-and-succession"
        emptyLabel="目前尚無「遺囑信託與身後傳承」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

