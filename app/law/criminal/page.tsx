import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function CriminalPage() {
  const placeholderArticles = [
    {
      title: "刑法 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "刑法 入門指南 — 佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout heroTitle={["刑法"]} heroLatin="Criminal law.">
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

