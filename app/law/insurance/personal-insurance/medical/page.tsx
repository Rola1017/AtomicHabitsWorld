import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function MedicalInsurancePage() {
  return (
    <CategoryLayout heroTitle={["醫療險"]} heroLatin="Medical insurance.">
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance/medical"
        emptyLabel="目前尚無「醫療險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
