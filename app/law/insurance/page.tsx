import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function InsurancePage() {
  return (
    <CategoryLayout heroTitle={["保險法"]} heroLatin="Insurance law.">
      <LawWpCategoryPostList
        sitePathKey="insurance"
        emptyLabel="目前尚無「保險法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
