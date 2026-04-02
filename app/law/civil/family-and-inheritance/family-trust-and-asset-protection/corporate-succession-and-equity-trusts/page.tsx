import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function CorporateSuccessionAndEquityTrustsPage() {
  return (
    <CategoryLayout
      heroTitle={["企業傳承與股權信託"]}
      heroLatin="Corporate succession & equity trusts."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection/corporate-succession-and-equity-trusts"
        emptyLabel="目前尚無「企業傳承與股權信託」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

