import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function AdminRemediesLaborInspectionPage() {
  const placeholderArticles = [
    { title: "行政救濟與勞檢應對 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "申訴/陳情/勞檢準備 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["行政救濟與勞檢應對"]} heroLatin="Administrative remedies & labor inspection.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

