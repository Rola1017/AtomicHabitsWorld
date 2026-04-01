import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function IndividualLaborPage() {
  return (
    <CategoryLayout
      heroTitle={["個別勞動法"]}
      heroLatin="Individual labor law."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual"
        emptyLabel="目前尚無「個別勞動法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
