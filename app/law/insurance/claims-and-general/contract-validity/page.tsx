import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function ContractValidityPage() {
  return (
    <CategoryLayout heroTitle={["契約效力"]} heroLatin="Contract validity.">
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general/contract-validity"
        emptyLabel="目前尚無「契約效力」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
