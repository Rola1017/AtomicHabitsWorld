import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function CivilPage() {
  return (
    <CategoryLayout heroTitle={["民法"]} heroLatin="Civil law.">
      <LawWpCategoryPostList
        sitePathKey="civil"
        emptyLabel="目前尚無「民法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
