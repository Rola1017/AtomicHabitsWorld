import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function PersonalInsurancePage() {
  const placeholderArticles = [
    { title: "人身保險規劃 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "壽險/醫療險/意外險 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["人身保險規劃"]} heroLatin="Personal insurance planning.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

