import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function CivilProcedurePage() {
  return (
    <CategoryLayout
      heroTitle={["民事訴訟法"]}
      heroLatin="Civil procedure law."
    >
      <LawWpCategoryPostList
        sitePathKey="civil-procedure"
        emptyLabel="目前尚無「民事訴訟法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

