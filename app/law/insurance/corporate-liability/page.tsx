import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function CorporateLiabilityPage() {
  const placeholderArticles = [
    { title: "企業保險與責任險 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "商業保險/責任風險 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["企業保險與責任險"]} heroLatin="Corporate insurance & liability.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

