import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function TestamentaryTrustsAndSuccessionPage() {
  return (
    <CategoryLayout
      heroTitle={["遺囑信託與身後傳承"]}
      heroLatin="Testamentary trusts & succession."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection/testamentary-trusts-and-succession"
        emptyLabel="目前尚無「遺囑信託與身後傳承」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

