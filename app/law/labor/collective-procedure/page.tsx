import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function CollectiveLaborProcedurePage() {
  const placeholderArticles = [
    {
      title: "集體勞動法&程序法 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "工會運作與程序要點 — 佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout
      heroTitle={["集體勞動法&程序法"]}
      heroLatin="Collective labor & procedure law."
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

