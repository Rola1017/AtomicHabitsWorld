import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function TerminationLayoffRetirementPage() {
  return (
    <CategoryLayout
      heroTitle={["終止契約、資遣與退休"]}
      heroLatin="Termination, layoff & retirement."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/termination-layoff-retirement"
        emptyLabel="目前尚無「終止契約、資遣與退休」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
