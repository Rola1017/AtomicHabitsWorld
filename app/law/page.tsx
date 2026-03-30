import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

const articles = [
  {
    title: "生育給付",
    href: "/law/labor/maternity-benefits",
    variant: "simple" as const,
  },
  {
    title: "勞保",
    href: "/law/labor/insurance",
    variant: "simple" as const,
  },
  {
    title: "「簽切結書放棄勞保」這個法律行為，是無效的❌",
    excerpt: "「簽切結書放棄勞保」這個法律行為，是無效的因為抵觸了勞保條例第6條的「強制規定」。勞保條例第6條規定「年滿15歲",
    href: "/law/labor/waiver-invalid",
    variant: "detailed" as const,
    featured: true,
  },
]

export default function LawPage() {
  return (
    <CategoryLayout heroTitle={["法律．權益．救濟"]} heroLatin="Ubi ius, ibi remedium">
      <div className="flex flex-col gap-4 sm:gap-5">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            href={article.href}
            variant={article.variant}
            featured={article.featured}
          />
        ))}
      </div>
    </CategoryLayout>
  )
}
