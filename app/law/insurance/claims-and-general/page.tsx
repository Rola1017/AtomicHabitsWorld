import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function ClaimsAndGeneralPage() {
  const placeholderArticles = [
    { title: "理賠實務與保險法總則 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "理賠流程/爭議處理 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["理賠實務與保險法總則"]} heroLatin="Claims practice & general principles.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

