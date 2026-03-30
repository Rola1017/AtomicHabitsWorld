import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function OccupationalAccidentInsurancePage() {
  const placeholderArticles = [
    { title: "職業災害保險與保護(災保法) — 文章佔位", href: "#", variant: "simple" as const },
    { title: "職災認定/補償/救濟 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["職業災害保險與保護(災保法)"]} heroLatin="Occupational accident insurance.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

