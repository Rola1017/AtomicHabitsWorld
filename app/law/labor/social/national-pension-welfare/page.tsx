import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function NationalPensionWelfarePage() {
  return (
    <CategoryLayout
      heroTitle={["國民年金與社會福利"]}
      heroLatin="National pension & social welfare."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/national-pension-welfare"
        emptyLabel="目前尚無「國民年金與社會福利」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
