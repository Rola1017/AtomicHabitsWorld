import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function NhiPage() {
  const placeholderArticles = [
    { title: "全民健保與二代健保 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "投保/保費/補充保費 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["全民健保與二代健保"]} heroLatin="National Health Insurance.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

