import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function LaborInsurancePage() {
  const placeholderArticles = [
    { title: "勞工保險(勞保) — 文章佔位", href: "#", variant: "simple" as const },
    { title: "給付/投保/爭議 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["勞工保險(勞保)"]} heroLatin="Labor insurance.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

