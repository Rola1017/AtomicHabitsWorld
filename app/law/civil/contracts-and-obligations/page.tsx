import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function ContractsAndObligationsPage() {
  return (
    <CategoryLayout
      heroTitle={["契約法與債權實務"]}
      heroLatin="Contracts & obligations in practice."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/contracts-and-obligations"
        emptyLabel="目前尚無「契約法與債權實務」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
