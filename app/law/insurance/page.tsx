import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function InsurancePage() {
  const placeholderArticles = [
    {
      title: "保險法 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "保險法 申請流程 — 佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout heroTitle={["保險法"]} heroLatin="Insurance law.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            href={article.href}
            variant={article.variant}
          />
        ))}
      </div>
    </CategoryLayout>
  )
}

