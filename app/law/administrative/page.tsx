import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function AdministrativePage() {
  const placeholderArticles = [
    {
      title: "行政法 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "行政救濟 基礎 — 佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout heroTitle={["行政法"]} heroLatin="Administrative law.">
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

