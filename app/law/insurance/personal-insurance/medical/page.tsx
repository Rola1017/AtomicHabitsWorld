import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function MedicalInsurancePage() {
  const placeholderArticles = [
    { title: "醫療險 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "住院/手術/實支實付 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["醫療險"]} heroLatin="Medical insurance.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

