import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function ClaimsAndGeneralPage() {
  return (
    <CategoryLayout
      heroTitle={["理賠實務與保險法總則"]}
      heroLatin="Claims practice & general principles."
    >
      <LawWpCategoryPostList
        sitePathKey="insurance/claims-and-general"
        emptyLabel="目前尚無「理賠實務與保險法總則」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
