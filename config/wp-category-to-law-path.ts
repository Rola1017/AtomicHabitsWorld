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
  "occupational-accident-insurance":
    "/law/labor/social/occupational-accident-insurance",
  "employment-insurance": "/law/labor/social/employment-insurance",
  nhi: "/law/labor/social/nhi",
  "national-pension-welfare": "/law/labor/social/national-pension-welfare",
  social: "/law/labor/social",
  /** 集體勞動法子分類優先於 collective-procedure 父分類 */
  "dispute-mediation": "/law/labor/collective-procedure/dispute-mediation",
  "admin-remedies-labor-inspection":
    "/law/labor/collective-procedure/admin-remedies-labor-inspection",
  "collective-procedure": "/law/labor/collective-procedure",
  "labor-social-law": "/law/labor",
  /** 保險法第 2 層（路徑優先於第 1 層與 insurance） */
  "disclosure-duty": "/law/insurance/claims-and-general/disclosure-duty",
  "contract-validity":
    "/law/insurance/claims-and-general/contract-validity",
  "dispute-resolution":
    "/law/insurance/claims-and-general/dispute-resolution",
  "life-insurance": "/law/insurance/personal-insurance/life-insurance",
  medical: "/law/insurance/personal-insurance/medical",
  accident: "/law/insurance/personal-insurance/accident",
  /** 保險法第 1 層 */
  "claims-and-general": "/law/insurance/claims-and-general",
  "personal-insurance": "/law/insurance/personal-insurance",
  "corporate-liability": "/law/insurance/corporate-liability",
  "financial-consumer-protection":
    "/law/insurance/financial-consumer-protection",
  insurance: "/law/insurance",
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
