import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function EmploymentInsurancePage() {
  const placeholderArticles = [
    { title: "就業保險與失業保障 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "失業給付/提早就業/職訓 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["就業保險與失業保障"]} heroLatin="Employment insurance & unemployment security.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

