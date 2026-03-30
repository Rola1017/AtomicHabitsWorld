import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function SocialLaborPage() {
  const placeholderArticles = [
    {
      title: "社會法 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "社會安全制度解析 — 佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout heroTitle={["社會法"]} heroLatin="Social law.">
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

