import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function LaborPage() {
  const laborPlaceholderArticles = [
    {
      title: "勞保給付 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
    {
      title: "勞保申請 — 文章佔位",
      href: "#",
      variant: "simple" as const,
    },
  ]

  return (
    <CategoryLayout
      heroTitle={[
        "1948 年《世界人權宣言》第 22 條：",
        "每個人都有獲得社會安全保障的權利",
      ]}
      heroLatin="Everyone, as a member of society, has the right to social security."
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        {laborPlaceholderArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            href={article.href}
            variant={article.variant}
          />
        ))}
      </div>
    </CategoryLayout>
  )
}

