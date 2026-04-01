import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function LawPage() {
  return (
    <CategoryLayout heroTitle={["法律．權益．救濟"]} heroLatin="Ubi ius, ibi remedium">
      <LawWpCategoryPostList
        sitePathKey="__law__"
        emptyLabel="目前尚無文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
