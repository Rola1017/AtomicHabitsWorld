import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function DisputeMediationPage() {
  const placeholderArticles = [
    { title: "勞資爭議處理與調解程序 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "調解流程/證據準備 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["勞資爭議處理與調解程序"]} heroLatin="Labor dispute resolution & mediation.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

