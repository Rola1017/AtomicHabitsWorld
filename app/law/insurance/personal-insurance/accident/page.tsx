import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function AccidentInsurancePage() {
  const placeholderArticles = [
    { title: "意外險 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "傷害給付與事故認定 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["意外險"]} heroLatin="Accident insurance.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

