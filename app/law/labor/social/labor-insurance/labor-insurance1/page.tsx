import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function LaborInsurance1Page() {
  return (
    <CategoryLayout heroTitle={["勞保1"]} heroLatin="Labor insurance · subcategory.">
      <LawWpCategoryPostList
        sitePathKey="labor/social/labor-insurance/labor-insurance1"
        emptyLabel="目前尚無「勞保1」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
