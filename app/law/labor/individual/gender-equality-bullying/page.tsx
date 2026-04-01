import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function GenderEqualityBullyingPage() {
  return (
    <CategoryLayout
      heroTitle={["性別平等與職場霸凌"]}
      heroLatin="Gender equality & workplace harassment."
    >
      <LawWpCategoryPostList
        sitePathKey="labor/individual/gender-equality-bullying"
        emptyLabel="目前尚無「性別平等與職場霸凌」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
