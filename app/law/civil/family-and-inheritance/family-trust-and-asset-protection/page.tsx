import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function FamilyTrustAndAssetProtectionPage() {
  return (
    <CategoryLayout
      heroTitle={["家族信託與資產保護"]}
      heroLatin="Family trust & asset protection."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection"
        emptyLabel="目前尚無「家族信託與資產保護」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
