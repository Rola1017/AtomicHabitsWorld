import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function CorporateLiabilityPage() {
  return (
    <CategoryLayout
      heroTitle={["企業保險與責任險"]}
      heroLatin="Corporate insurance & liability."
    >
      <LawWpCategoryPostList
        sitePathKey="insurance/corporate-liability"
        emptyLabel="目前尚無「企業保險與責任險」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
