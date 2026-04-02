import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function AdminRemediesLaborInspectionPage() {
  return (
    <CategoryLayout
      heroTitle={["行政救濟與勞檢應對"]}
      heroLatin="Administrative remedies & labor inspection."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/collective-procedure/admin-remedies-labor-inspection"
        emptyLabel="目前尚無「行政救濟與勞檢應對」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
