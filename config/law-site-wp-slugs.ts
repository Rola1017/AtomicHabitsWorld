/**
 * 站內路徑（不含 /law/ 前綴）→ WordPress 文章分類「代稱」slug。
 * 未列出的路徑會用「最後一段路徑」當 slug（例如 labor/social/nhi → nhi）。
 * 請與 WP 後台分類代稱一致（英文）。
 */
export const SITE_PATH_TO_WP_CATEGORY_SLUG: Record<string, string> = {
  labor: "labor-social-law",
  /** 個別勞動法；若後台 slug 不同請改此值 */
  "labor/individual": "individual",
  /** 勞動契約與入職管理；若後台 slug 不同請改此值 */
  "labor/individual/contract-onboarding": "contract-onboarding",
  /** 工資、工時與休假；若後台 slug 不同請改此值 */
  "labor/individual/wage-hours-leave": "wage-hours-leave",
  /** 終止契約、資遣與退休；若後台 slug 不同請改此值 */
  "labor/individual/termination-layoff-retirement":
    "termination-layoff-retirement",
  /** 性別平等與職場霸凌；若後台 slug 不同請改此值 */
  "labor/individual/gender-equality-bullying": "gender-equality-bullying",
  /** 社會法；若後台 slug 不同請改此值 */
  "labor/social": "social",
  /** 勞工保險(勞保)；若後台 slug 不同請改此值 */
  "labor/social/labor-insurance": "labor-insurance",
  /** 勞工保險底下「勞保1」；WP 代稱 labor-insurance1 */
  "labor/social/labor-insurance/labor-insurance1": "labor-insurance1",
  /** 職業災害保險與保護(災保法)；若後台 slug 不同請改此值 */
  "labor/social/occupational-accident-insurance":
    "occupational-accident-insurance",
  /** 就業保險與失業保障；若後台 slug 不同請改此值 */
  "labor/social/employment-insurance": "employment-insurance",
  /** 全民健保與二代健保；若後台 slug 不同請改此值 */
  "labor/social/nhi": "nhi",
  /** 國民年金與社會福利；若後台 slug 不同請改此值 */
  "labor/social/national-pension-welfare": "national-pension-welfare",
  /** 集體勞動法&程序法；若後台 slug 不同請改此值 */
  "labor/collective-procedure": "collective-procedure",
  /** 勞資爭議處理與調解程序；若後台 slug 不同請改此值 */
  "labor/collective-procedure/dispute-mediation": "dispute-mediation",
  /** 行政救濟與勞檢應對；若後台 slug 不同請改此值 */
  "labor/collective-procedure/admin-remedies-labor-inspection":
    "admin-remedies-labor-inspection",

  /** 保險法（最上層）；與後台父分類 slug 一致 */
  insurance: "insurance",
  /** 保險法第 1 層子分類 */
  "insurance/claims-and-general": "claims-and-general",
  "insurance/personal-insurance": "personal-insurance",
  "insurance/corporate-liability": "corporate-liability",
  "insurance/financial-consumer-protection": "financial-consumer-protection",
  /** 保險法第 2 層（理賠實務與保險法總則下） */
  /** WP 後台子分類代稱為 claims-and-general-disclosure-duty（非 disclosure-duty） */
  "insurance/claims-and-general/disclosure-duty":
    "claims-and-general-disclosure-duty",
  "insurance/claims-and-general/contract-validity": "contract-validity",
  "insurance/claims-and-general/dispute-resolution": "dispute-resolution",
  /** 保險法第 2 層（人身保險規劃下） */
  "insurance/personal-insurance/life-insurance": "life-insurance",
  /** 壽險底下「儲蓄險」；WP 代稱為 savings-insurance（後台輸入含空格會轉成連字號） */
  "insurance/personal-insurance/life-insurance/savings": "savings-insurance",
  "insurance/personal-insurance/medical": "medical",
  "insurance/personal-insurance/accident": "accident",

  /** 民法（最上層） */
  civil: "civil",
  "civil/contracts-and-obligations": "contracts-and-obligations",
  "civil/family-and-inheritance": "family-and-inheritance",
  "civil/torts-and-damages": "torts-and-damages",
  "civil/property-law": "property-law",
  "civil/family-and-inheritance/inheritance-and-forced-heirship":
    "inheritance-and-forced-heirship",
  "civil/family-and-inheritance/family-trust-and-asset-protection":
    "family-trust-and-asset-protection",
  "civil/family-and-inheritance/marriage-contracts-and-property-regimes":
    "marriage-contracts-and-property-regimes",
  "civil/family-and-inheritance/wills-and-advance-directives":
    "wills-and-advance-directives",
}

/**
 * `/law` 法律分類頁：WordPress 文章分類代稱（請與後台「法律」分類 slug 一致）。
 * 若後台不同，只改此常數即可。
 */
export const LAW_ROOT_WP_CATEGORY_SLUG = "law"

/** 首頁 /law 要合併顯示的 WP 分類（可多個） */
export const WP_LAW_HOME_CATEGORY_SLUGS: string[] = ["labor-social-law"]

export function getWpCategorySlugForSitePath(sitePath: string): string {
  const normalized = sitePath.replace(/^\/+|\/+$/g, "")
  if (normalized === "__all__") return ""
  if (SITE_PATH_TO_WP_CATEGORY_SLUG[normalized]) {
    return SITE_PATH_TO_WP_CATEGORY_SLUG[normalized]
  }
  const parts = normalized.split("/").filter(Boolean)
  return parts[parts.length - 1] ?? ""
}

/**
 * 列表頁合併查詢：父層 path → 要一併查詢的 WP 分類 slug（含自己與所有子孫）。
 * WP 的 categoryIn 不會自動含子分類；與保險法區相同，需明列 slug。
 *
 * 現在即可維護：葉節點可先只列「自己」一個 slug（行為與單一查詢相同）。
 * 往後在 WP 新增子分類時，把子分類 slug append 到同一陣列即可，不必改程式結構。
 * 陣列裡若某 slug 在 WP 尚不存在，fetch 會略過該項，不會拋錯。
 */
const SITE_PATH_MERGED_WP_SLUGS: Record<string, string[]> = {
  /** 保險法 */
  insurance: [
    "insurance",
    "claims-and-general",
    "personal-insurance",
    "corporate-liability",
    "financial-consumer-protection",
    "claims-and-general-disclosure-duty",
    "contract-validity",
    "dispute-resolution",
    "life-insurance",
    "savings-insurance",
    "medical",
    "accident",
  ],
  "insurance/claims-and-general": [
    "claims-and-general",
    "claims-and-general-disclosure-duty",
    "contract-validity",
    "dispute-resolution",
  ],
  "insurance/personal-insurance": [
    "personal-insurance",
    "life-insurance",
    "savings-insurance",
    "medical",
    "accident",
  ],
  /** 保險法葉節點（若 WP 再有子分類，於此陣列追加 slug） */
  "insurance/corporate-liability": ["corporate-liability"],
  "insurance/financial-consumer-protection": [
    "financial-consumer-protection",
  ],
  "insurance/claims-and-general/disclosure-duty": [
    "claims-and-general-disclosure-duty",
  ],
  "insurance/claims-and-general/contract-validity": ["contract-validity"],
  "insurance/claims-and-general/dispute-resolution": ["dispute-resolution"],
  "insurance/personal-insurance/life-insurance": [
    "life-insurance",
    "savings-insurance",
  ],
  "insurance/personal-insurance/life-insurance/savings": ["savings-insurance"],
  "insurance/personal-insurance/medical": ["medical"],
  "insurance/personal-insurance/accident": ["accident"],
  /** 勞動法（labor-social-law）＋個別／社會／集體三枝及其子分類 */
  labor: [
    "labor-social-law",
    "individual",
    "social",
    "collective-procedure",
    "contract-onboarding",
    "wage-hours-leave",
    "gender-equality-bullying",
    "termination-layoff-retirement",
    "nhi",
    "labor-insurance",
    "labor-insurance1",
    "national-pension-welfare",
    "employment-insurance",
    "occupational-accident-insurance",
    "dispute-mediation",
    "admin-remedies-labor-inspection",
  ],
  "labor/individual": [
    "individual",
    "contract-onboarding",
    "wage-hours-leave",
    "gender-equality-bullying",
    "termination-layoff-retirement",
  ],
  "labor/social": [
    "social",
    "nhi",
    "labor-insurance",
    "labor-insurance1",
    "national-pension-welfare",
    "employment-insurance",
    "occupational-accident-insurance",
  ],
  "labor/collective-procedure": [
    "collective-procedure",
    "dispute-mediation",
    "admin-remedies-labor-inspection",
  ],
  /** 勞動法葉節點（若 WP 再有子分類，於此陣列追加 slug） */
  "labor/individual/contract-onboarding": ["contract-onboarding"],
  "labor/individual/wage-hours-leave": ["wage-hours-leave"],
  "labor/individual/termination-layoff-retirement": [
    "termination-layoff-retirement",
  ],
  "labor/individual/gender-equality-bullying": ["gender-equality-bullying"],
  "labor/social/labor-insurance": ["labor-insurance", "labor-insurance1"],
  "labor/social/labor-insurance/labor-insurance1": ["labor-insurance1"],
  "labor/social/occupational-accident-insurance": [
    "occupational-accident-insurance",
  ],
  "labor/social/employment-insurance": ["employment-insurance"],
  "labor/social/nhi": ["nhi"],
  "labor/social/national-pension-welfare": ["national-pension-welfare"],
  "labor/collective-procedure/dispute-mediation": ["dispute-mediation"],
  "labor/collective-procedure/admin-remedies-labor-inspection": [
    "admin-remedies-labor-inspection",
  ],
  /** 民法 */
  civil: [
    "civil",
    "contracts-and-obligations",
    "family-and-inheritance",
    "torts-and-damages",
    "property-law",
    "inheritance-and-forced-heirship",
    "family-trust-and-asset-protection",
    "marriage-contracts-and-property-regimes",
    "wills-and-advance-directives",
  ],
  "civil/contracts-and-obligations": ["contracts-and-obligations"],
  "civil/family-and-inheritance": [
    "family-and-inheritance",
    "inheritance-and-forced-heirship",
    "family-trust-and-asset-protection",
    "marriage-contracts-and-property-regimes",
    "wills-and-advance-directives",
  ],
  "civil/torts-and-damages": ["torts-and-damages"],
  "civil/property-law": ["property-law"],
  "civil/family-and-inheritance/inheritance-and-forced-heirship": [
    "inheritance-and-forced-heirship",
  ],
  "civil/family-and-inheritance/family-trust-and-asset-protection": [
    "family-trust-and-asset-protection",
  ],
  "civil/family-and-inheritance/marriage-contracts-and-property-regimes": [
    "marriage-contracts-and-property-regimes",
  ],
  "civil/family-and-inheritance/wills-and-advance-directives": [
    "wills-and-advance-directives",
  ],
}

function uniqWpSlugs(slugs: string[]): string[] {
  return [...new Set(slugs.filter(Boolean))]
}

/**
 * `/law` 法律總覽：WP「法律」父分類（law）＋本站已串接的勞動法枝、保險法枝等所有子分類 slug。
 * 與單查 law 不同，子分類文章不會自動算進父分類，故需明列合併。
 */
export const WP_LAW_PAGE_MERGED_CATEGORY_SLUGS: string[] = uniqWpSlugs([
  LAW_ROOT_WP_CATEGORY_SLUG,
  ...SITE_PATH_MERGED_WP_SLUGS.labor,
  ...SITE_PATH_MERGED_WP_SLUGS.insurance,
  ...SITE_PATH_MERGED_WP_SLUGS.civil,
])

export function getMergedWpCategorySlugsForSitePath(
  sitePath: string
): string[] | null {
  const normalized = sitePath.replace(/^\/+|\/+$/g, "")
  const slugs = SITE_PATH_MERGED_WP_SLUGS[normalized]
  return slugs ? [...slugs] : null
}
