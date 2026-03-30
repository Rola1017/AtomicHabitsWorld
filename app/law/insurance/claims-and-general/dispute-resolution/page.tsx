import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function DisputeResolutionPage() {
  const placeholderArticles = [
    { title: "爭議處理 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "申訴/調處/訴訟流程 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["爭議處理"]} heroLatin="Dispute resolution.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

