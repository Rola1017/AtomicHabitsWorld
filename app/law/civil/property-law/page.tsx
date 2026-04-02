import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function PropertyLawPage() {
  return (
    <CategoryLayout
      heroTitle={["物權與不動產法"]}
      heroLatin="Property & real estate law."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/property-law"
        emptyLabel="目前尚無「物權與不動產法」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
