import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function NationalPensionWelfarePage() {
  const placeholderArticles = [
    { title: "國民年金與社會福利 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "年金/補助/福利資源 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["國民年金與社會福利"]} heroLatin="National pension & social welfare.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

