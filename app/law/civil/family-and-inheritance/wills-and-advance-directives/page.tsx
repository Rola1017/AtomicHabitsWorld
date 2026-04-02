import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function WillsAndAdvanceDirectivesPage() {
  return (
    <CategoryLayout
      heroTitle={["遺囑撰擬與預立醫療決定"]}
      heroLatin="Wills & advance directives."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/wills-and-advance-directives"
        emptyLabel="目前尚無「遺囑撰擬與預立醫療決定」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
