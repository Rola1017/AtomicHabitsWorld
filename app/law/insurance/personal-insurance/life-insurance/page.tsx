import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function LifeInsurancePage() {
  return (
    <CategoryLayout heroTitle={["壽險"]} heroLatin="Life insurance.">
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance/life-insurance"
        emptyLabel="目前尚無「壽險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
