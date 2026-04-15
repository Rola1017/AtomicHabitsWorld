export type LawRecommendedArticle = {
  title: string
  href: string
  categoryLabel?: string
}

/**
 * 側欄「推薦文章」手動清單（可自行調整順序）。
 * - title: 顯示文字
 * - href: 站內連結
 * - categoryLabel: 可選，顯示在次行
 */
export const LAW_RECOMMENDED_ARTICLES: LawRecommendedArticle[] = [
  {
    title: "勞動社會法",
    href: "/law/labor",
    categoryLabel: "勞動社會法",
  },
  {
    title: "勞工保險",
    href: "/law/labor/social/labor-insurance",
    categoryLabel: "勞動社會保障",
  },
  {
    title: "全民健保",
    href: "/law/labor/social/nhi",
    categoryLabel: "勞動社會保障",
  },
]
