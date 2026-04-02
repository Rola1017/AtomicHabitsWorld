import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function ChildProtectionAndEducationTrustsPage() {
  return (
    <CategoryLayout
      heroTitle={["子女保障與教育信託"]}
      heroLatin="Child protection & education trusts."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/family-trust-and-asset-protection/child-protection-and-education-trusts"
        emptyLabel="目前尚無「子女保障與教育信託」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}

