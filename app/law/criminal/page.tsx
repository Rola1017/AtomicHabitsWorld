import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function CriminalPage() {
  return (
    <CategoryLayout heroTitle={["刑法"]} heroLatin="Criminal law.">
      <LawWpCategoryPostList
        sitePathKey="criminal"
        emptyLabel="目前尚無「刑法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

