import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function InheritanceAndForcedHeirshipPage() {
  return (
    <CategoryLayout
      heroTitle={["遺產繼承與特留分實務"]}
      heroLatin="Inheritance & forced heirship."
    >
      <LawWpCategoryPostList
        sitePathKey="civil/family-and-inheritance/inheritance-and-forced-heirship"
        emptyLabel="目前尚無「遺產繼承與特留分實務」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
