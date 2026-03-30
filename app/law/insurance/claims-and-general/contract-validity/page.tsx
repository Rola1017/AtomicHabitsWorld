import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function ContractValidityPage() {
  const placeholderArticles = [
    { title: "契約效力 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "無效/撤銷/解除判斷 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["契約效力"]} heroLatin="Contract validity.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

