/**
 * WP 文章分類代稱 → 站內該區文章 URL 前綴（與 app/law 路由一致）
 */
export const WP_CATEGORY_SLUG_TO_LAW_PATH_PREFIX: Record<string, string> = {
  /** 個別勞動法子分類優先於 individual 父分類 */
  "contract-onboarding": "/law/labor/individual/contract-onboarding",
  "wage-hours-leave": "/law/labor/individual/wage-hours-leave",
  "termination-layoff-retirement":
    "/law/labor/individual/termination-layoff-retirement",
  "gender-equality-bullying":
    "/law/labor/individual/gender-equality-bullying",
  /** 子分類優先於 labor-social-law */
  individual: "/law/labor/individual",
  /** 社會法子分類優先於 social 父分類 */
  "labor-insurance": "/law/labor/social/labor-insurance",
  /** 更細的子分類優先於社會法父分類 */
  nhi: "/law/labor/social/nhi",
  social: "/law/labor/social",
  /** 集體勞動法子分類優先於 collective-procedure 父分類 */
  "dispute-mediation": "/law/labor/collective-procedure/dispute-mediation",
  "admin-remedies-labor-inspection":
    "/law/labor/collective-procedure/admin-remedies-labor-inspection",
  "collective-procedure": "/law/labor/collective-procedure",
  "labor-social-law": "/law/labor",
  /** 與 WP 分類代稱、站內路徑一致時補上，首頁合併列表才會連到正確詳頁 */
  insurance: "/law/insurance",
  "claims-and-general": "/law/insurance/claims-and-general",
  /** 僅掛父分類 law 且無上列子分類時；可改成實際路由前綴 */
  law: "/law/labor",
}

const DEFAULT_PREFIX = "/law/labor"

export function getLawArticleHrefFromWpCategories(
  postSlug: string,
  categories: Array<{ slug?: string }> | undefined
): string {
  const nodes = categories?.filter(Boolean) ?? []
  for (const [wpSlug, prefix] of Object.entries(
    WP_CATEGORY_SLUG_TO_LAW_PATH_PREFIX
  )) {
    if (nodes.some((c) => c.slug === wpSlug)) {
      return `${prefix}/${encodeURIComponent(postSlug)}`
    }
  }
  return `${DEFAULT_PREFIX}/${encodeURIComponent(postSlug)}`
}
