import { CategoryLayout } from "@/components/law/CategoryLayout"
import { ArticleCard } from "@/components/law/article-card"

export default function DisclosureDutyPage() {
  const placeholderArticles = [
    { title: "告知義務 — 文章佔位", href: "#", variant: "simple" as const },
    { title: "危險增加與通知義務 — 佔位", href: "#", variant: "simple" as const },
  ]

  return (
    <CategoryLayout heroTitle={["告知義務"]} heroLatin="Duty of disclosure.">
      <div className="flex flex-col gap-4 sm:gap-5">
        {placeholderArticles.map((a, i) => (
          <ArticleCard key={i} title={a.title} href={a.href} variant={a.variant} />
        ))}
      </div>
    </CategoryLayout>
  )
}

