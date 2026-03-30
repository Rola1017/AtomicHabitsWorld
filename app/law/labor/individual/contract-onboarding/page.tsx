import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function ContractOnboardingPage() {
  const placeholderArticles = [
    { title: "勞動契約與入職管理 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "試用期 / 報到流程 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["勞動契約與入職管理"]} heroLatin="Employment contract & onboarding.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

