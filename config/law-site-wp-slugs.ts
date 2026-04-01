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
  /** 集體勞動法&程序法；若後台 slug 不同請改此值 */
  "labor/collective-procedure": "collective-procedure",
  // 依你的 WP 實際代稱增修，例如：
  // "labor/social/nhi": "nhi",
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
