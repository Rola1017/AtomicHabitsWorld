import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function LifeInsurancePage() {
  const placeholderArticles = [
    { title: "壽險 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "受益人/保額規劃 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["壽險"]} heroLatin="Life insurance.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

