import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function WageHoursLeavePage() {
  const placeholderArticles = [
    { title: "工資、工時與休假 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "加班費 / 特休 / 排班 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["工資、工時與休假"]} heroLatin="Wages, working hours & leave.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((article, index) => (
          <ArticleCard key={index} title={article.title} href={article.href} variant={article.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

