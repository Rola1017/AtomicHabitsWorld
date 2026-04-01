import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function NhiPage() {
  return (
    <CategoryLayout
      heroTitle={["全民健保與二代健保"]}
      heroLatin="National Health Insurance."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/social/nhi"
        emptyLabel="目前尚無「全民健保與二代健保」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
