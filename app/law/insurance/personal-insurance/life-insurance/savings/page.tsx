import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function SavingsInsurancePage() {
  return (
    <CategoryLayout heroTitle={["儲蓄險"]} heroLatin="Savings-type life insurance.">
      <LawWpCategoryPostList
        sitePathKey="insurance/personal-insurance/life-insurance/savings"
        emptyLabel="目前尚無「儲蓄險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
