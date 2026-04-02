import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function TortsAndDamagesPage() {
  return (
    <CategoryLayout
      heroTitle={["侵權行為與損害賠償"]}
      heroLatin="Torts & damages."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/torts-and-damages"
        emptyLabel="目前尚無「侵權行為與損害賠償」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
