import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function FamilyAndInheritancePage() {
  return (
    <CategoryLayout
      heroTitle={["親屬與繼承法"]}
      heroLatin="Family & inheritance law."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance"
        emptyLabel="目前尚無「親屬與繼承法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
