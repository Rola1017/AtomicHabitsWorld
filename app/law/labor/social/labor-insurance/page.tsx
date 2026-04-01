import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function LaborInsurancePage() {
  return (
    <CategoryLayout
      heroTitle={["勞工保險(勞保)"]}
      heroLatin="Labor insurance."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/labor-insurance"
        emptyLabel="目前尚無「勞工保險(勞保)」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
