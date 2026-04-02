import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function AccidentInsurancePage() {
  return (
    <CategoryLayout heroTitle={["意外險"]} heroLatin="Accident insurance.">
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance/accident"
        emptyLabel="目前尚無「意外險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
