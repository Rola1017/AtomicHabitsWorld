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
  /** 社會法子分類優先於 social 父分類；第 3 層須優先於 labor-insurance */
  "labor-insurance1": "/law/labor/social/labor-insurance/labor-insurance1",
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
  /** WP 子分類 slug：claims-and-general-disclosure-duty */
  "claims-and-general-disclosure-duty":
    "/law/insurance/claims-and-general/disclosure-duty",
  "contract-validity":
    "/law/insurance/claims-and-general/contract-validity",
  "dispute-resolution":
    "/law/insurance/claims-and-general/dispute-resolution",
  /** 壽險下「儲蓄險」須優先於 life-insurance */
  "savings-insurance":
    "/law/insurance/personal-insurance/life-insurance/savings",
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
  /** 民法：第 3 層須優先於第 2 層 */
  "testamentary-trusts-and-succession":
    "/law/civil/family-and-inheritance/family-trust-and-asset-protection/testamentary-trusts-and-succession",
  "child-protection-and-education-trusts":
    "/law/civil/family-and-inheritance/family-trust-and-asset-protection/child-protection-and-education-trusts",
  "retirement-trusts-and-guardianship":
    "/law/civil/family-and-inheritance/family-trust-and-asset-protection/retirement-trusts-and-guardianship",
  "corporate-succession-and-equity-trusts":
    "/law/civil/family-and-inheritance/family-trust-and-asset-protection/corporate-succession-and-equity-trusts",
  /** 民法：第 2 層須優先於 family-and-inheritance 與 civil */
  "inheritance-and-forced-heirship":
    "/law/civil/family-and-inheritance/inheritance-and-forced-heirship",
  "family-trust-and-asset-protection":
    "/law/civil/family-and-inheritance/family-trust-and-asset-protection",
  "marriage-contracts-and-property-regimes":
    "/law/civil/family-and-inheritance/marriage-contracts-and-property-regimes",
  "wills-and-advance-directives":
    "/law/civil/family-and-inheritance/wills-and-advance-directives",
  "contracts-and-obligations": "/law/civil/contracts-and-obligations",
  "family-and-inheritance": "/law/civil/family-and-inheritance",
  "torts-and-damages": "/law/civil/torts-and-damages",
  "property-law": "/law/civil/property-law",
  civil: "/law/civil",
  /** 行政法 */
  administrative: "/law/administrative",
  criminal: "/law/criminal",
  /** 民事訴訟法 */
  "civil-procedure": "/law/civil-procedure",
  /** 僅掛父分類 law 且無上列子分類時；可改成實際路由前綴 */
  law: "/law",
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
