import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function CollectiveLaborProcedurePage() {
  return (
    <CategoryLayout
      heroTitle={["集體勞動法&程序法"]}
      heroLatin="Collective labor & procedure law."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/collective-procedure"
        emptyLabel="目前尚無「集體勞動法&程序法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
