import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "法律｜民法｜物權法｜AtomicHabitsWorld",
  description: "瀏覽法律｜民法｜物權法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
  alternates: {
    canonical: "/law/civil/property-law",
  },
  openGraph: {
    title: "法律｜民法｜物權法｜AtomicHabitsWorld",
    description: "瀏覽法律｜民法｜物權法的重點整理與文章列表，快速掌握主題脈絡與實務重點。",
    url: "/law/civil/property-law",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function PropertyLawPage() {
  return (
    <CategoryLayout
      heroTitle={["物權與不動產法"]}
      heroLatin="Property & real estate law."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/property-law"
        emptyLabel="目前尚無「物權與不動產法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
