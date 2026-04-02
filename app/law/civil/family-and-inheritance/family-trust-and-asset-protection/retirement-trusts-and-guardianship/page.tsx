import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function RetirementTrustsAndGuardianshipPage() {
  return (
    <CategoryLayout
      heroTitle={["安養信託與意定監護"]}
      heroLatin="Retirement trusts & guardianship."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship"
        emptyLabel="目前尚無「安養信託與意定監護」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

