import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function DisputeResolutionPage() {
  return (
    <CategoryLayout heroTitle={["爭議處理"]} heroLatin="Dispute resolution.">
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general/dispute-resolution"
        emptyLabel="目前尚無「爭議處理」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
