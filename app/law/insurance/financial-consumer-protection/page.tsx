import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LawWpCategoryPostList } from "@/components/law/law-wp-category-post-list"

export default function FinancialConsumerProtectionPage() {
  return (
    <CategoryLayout
      heroTitle={["金融消費者保護與法規"]}
      heroLatin="Financial consumer protection & regulations."
    >
      <LawWpCategoryPostList
        sitePathKey="insurance/financial-consumer-protection"
        emptyLabel="目前尚無「金融消費者保護與法規」文章，請稍後再試。"
      />
    </CategoryLayout>
  )
}
