import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function OccupationalAccidentInsurancePage() {
  return (
    <CategoryLayout
      heroTitle={["職業災害保險與保護(災保法)"]}
      heroLatin="Occupational accident insurance."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/occupational-accident-insurance"
        emptyLabel="目前尚無「職業災害保險與保護(災保法)」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
