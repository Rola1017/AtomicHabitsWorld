import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function EmploymentInsurancePage() {
  return (
    <CategoryLayout
      heroTitle={["就業保險與失業保障"]}
      heroLatin="Employment insurance & unemployment security."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/employment-insurance"
        emptyLabel="目前尚無「就業保險與失業保障」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
