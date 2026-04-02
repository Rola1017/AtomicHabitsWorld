import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function DisclosureDutyPage() {
  return (
    <CategoryLayout heroTitle={["告知義務"]} heroLatin="Duty of disclosure.">
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general/disclosure-duty"
        emptyLabel="目前尚無「告知義務」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
