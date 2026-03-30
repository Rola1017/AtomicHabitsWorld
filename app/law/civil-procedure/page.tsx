import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function CivilProcedurePage() {
  const placeholderArticles = [
    {
      title: "民事訴訟法 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "民事程序基礎 — 佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout
      heroTitle={["民事訴訟法"]}
      heroLatin="Civil procedure law."
    >
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

