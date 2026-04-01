/**
 * 勞保新聞、最新政策 — 權威來源連結（僅顯示標題）
 * 請依需要自行增刪；對外連結建議加上 rel="noopener noreferrer"
 */
export type LaborAuthorityLink = {
  title: string
  href: string
}

export const LABOR_AUTHORITY_LINKS: LaborAuthorityLink[] = [
  {
    title: "勞動部全球資訊網",
    href: "https://www.mol.gov.tw/",
  },
  {
    title: "勞動部勞動法令查詢系統",
    href: "https://laws.mol.gov.tw/",
  },
  {
    title: "衛生福利部（社會保險與福利相關）",
    href: "https://www.mohw.gov.tw/",
  },
]
