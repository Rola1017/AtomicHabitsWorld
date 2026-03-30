import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function GenderEqualityBullyingPage() {
  const placeholderArticles = [
    { title: "性別平等與職場霸凌 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "性平申訴 / 防治措施 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["性別平等與職場霸凌"]} heroLatin="Gender equality & workplace harassment.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

