import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function TerminationLayoffRetirementPage() {
  const placeholderArticles = [
    { title: "終止契約、資遣與退休 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "資遣費 / 預告期 / 退休金 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["終止契約、資遣與退休"]} heroLatin="Termination, layoff & retirement.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

