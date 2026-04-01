import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function ContractOnboardingPage() {
  return (
    <CategoryLayout
      heroTitle={["勞動契約與入職管理"]}
      heroLatin="Employment contract & onboarding."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/contract-onboarding"
        emptyLabel="目前尚無「勞動契約與入職管理」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
