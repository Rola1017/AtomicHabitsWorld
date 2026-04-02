import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function PersonalInsurancePage() {
  return (
    <CategoryLayout
      heroTitle={["人身保險規劃"]}
      heroLatin="Personal insurance planning."
    >
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance"
        emptyLabel="目前尚無「人身保險規劃」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
