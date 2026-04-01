import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function WageHoursLeavePage() {
  return (
    <CategoryLayout
      heroTitle={["工資、工時與休假"]}
      heroLatin="Wages, working hours & leave."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/wage-hours-leave"
        emptyLabel="目前尚無「工資、工時與休假」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
