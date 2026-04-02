import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function DisputeMediationPage() {
  return (
    <CategoryLayout
      heroTitle={["勞資爭議處理與調解程序"]}
      heroLatin="Labor dispute resolution & mediation."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/collective-procedure/dispute-mediation"
        emptyLabel="目前尚無「勞資爭議處理與調解程序」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
