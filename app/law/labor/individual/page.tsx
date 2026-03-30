import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function IndividualLaborPage() {
  const placeholderArticles = [
    {
      title: "個別勞動法 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "勞動契約要點 — 佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout heroTitle={["個別勞動法"]} heroLatin="Individual labor law.">
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

