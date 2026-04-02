import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function LaborPage() {
  return (
    <CategoryLayout
      heroTitle={[
        "1948 年《世界人權宣言》第 22 條：",
        "每個人都有獲得社會安全保障的權利",
      ]}
      heroLatin="Everyone, as a member of society, has the right to social security."
    >
      <LawWpCategoryPostList
        sitePathKey="labor"
        emptyLabel="目前尚無「勞動社會法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
