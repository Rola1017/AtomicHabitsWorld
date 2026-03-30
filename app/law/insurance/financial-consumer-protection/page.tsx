import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function FinancialConsumerProtectionPage() {
  const placeholderArticles = [
    { title: "金融消費者保護與法規 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "申訴/調處/金管規範 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["金融消費者保護與法規"]} heroLatin="Financial consumer protection & regulations.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

