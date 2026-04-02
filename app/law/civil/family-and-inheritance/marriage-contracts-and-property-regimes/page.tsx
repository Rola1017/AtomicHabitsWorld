import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function MarriageContractsAndPropertyRegimesPage() {
  return (
    <CategoryLayout
      heroTitle={["婚姻契約與財產制"]}
      heroLatin="Marriage contracts & property regimes."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/marriage-contracts-and-property-regimes"
        emptyLabel="目前尚無「婚姻契約與財產制」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
