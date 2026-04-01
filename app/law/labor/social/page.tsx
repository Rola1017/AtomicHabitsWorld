import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function SocialLaborPage() {
  return (
    <CategoryLayout heroTitle={["社會法"]} heroLatin="Social law.">
      <LawWpCategoryPostList
        sitePathKey="labor/social"
        emptyLabel="目前尚無「社會法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
