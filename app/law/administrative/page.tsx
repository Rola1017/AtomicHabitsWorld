import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function AdministrativePage() {
  return (
    <CategoryLayout heroTitle={["行政法"]} heroLatin="Administrative law.">
      <LawWpCategoryPostList
        sitePathKey="administrative"
        emptyLabel="目前尚無「行政法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

