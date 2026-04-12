import { WP_CATEGORY_SLUG_TO_LAW_PATH_PREFIX } from "@/config/wp-category-to-law-path"

/** 與 law-header 導覽一致：用分類「顯示名稱」對應站內路徑（WP 後台分類名稱須一致） */
const CATEGORY_NAME_TO_HREF: Record<string, string> = {
  個別勞動法: "/law/labor/individual",
  社會法: "/law/labor/social",
  "集體勞動法&程序法": "/law/labor/collective-procedure",
}

/** 若後台用英文 slug，可在此補上對應路徑 */
const CATEGORY_SLUG_TO_HREF: Record<string, string> = {
  "labor-social-law": "/law/labor",
}

export type BreadcrumbItem = {
  label: string
  /** 最後一層（目前文章標題）可不給，改為純文字、非連結 */
  href?: string
}

/**
 * 麵包屑：首頁 » 法律 » 勞動社會法 »（可選：子分類）» **文章標題**
 * 最後一層永遠是文章標題（與 WP「代稱 slug」無關）；中間子分類若與第二層同樣叫「法律」會略過，避免重複。
 */
export function buildLaborArticleBreadcrumb(
  categories: Array<{ slug?: string; name?: string }> | undefined,
  postTitle: string
): BreadcrumbItem[] {
  const base: BreadcrumbItem[] = [
    { label: "首頁", href: "/" },
    { label: "法律", href: "/law" },
    { label: "勞動社會法", href: "/law/labor" },
  ]

  const nodes = categories?.filter(Boolean) ?? []
  const leaf = nodes.find((c) => {
    const slug = c.slug ?? ""
    if (slug === "labor-social-law") return false
    return true
  })

  const out: BreadcrumbItem[] = [...base]

  if (leaf) {
    const name = leaf.name?.trim() ?? ""
    const slug = leaf.slug?.trim() ?? ""
    // 與第二層「法律」同名時不重複顯示
    if (name && name !== "法律") {
      let href = "/law/labor"
      if (name && CATEGORY_NAME_TO_HREF[name]) {
        href = CATEGORY_NAME_TO_HREF[name]
      } else if (slug && CATEGORY_SLUG_TO_HREF[slug]) {
        href = CATEGORY_SLUG_TO_HREF[slug]
      }
      out.push({ label: name || slug || "文章", href })
    }
  }

  const title = postTitle.trim() || "文章"
  out.push({ label: title })

  return out
}

const LABOR_SITE_PREFIX = "/law/labor"

/** 非勞動詳頁麵包屑：slug → 顯示名（與 law-header 用語一致；WP 有 name 時仍以 name 為優先） */
const LAW_ARTICLE_BREADCRUMB_SLUG_LABEL: Record<string, string> = {
  insurance: "保險法",
  "claims-and-general": "理賠實務與保險法總則",
  "claims-and-general-disclosure-duty": "告知義務",
  "contract-validity": "契約效力",
  "dispute-resolution": "爭議處理",
  "personal-insurance": "人身保險規劃",
  "life-insurance": "壽險",
  "savings-insurance": "儲蓄險",
  medical: "醫療險",
  accident: "意外險",
  "corporate-liability": "企業保險與責任險",
  "financial-consumer-protection": "金融消費者保護與法規",
  civil: "民法",
  "contracts-and-obligations": "契約法與債權實務",
  "family-and-inheritance": "親屬與繼承法",
  "torts-and-damages": "侵權行為與損害賠償",
  "property-law": "物權與不動產法",
  "inheritance-and-forced-heirship": "遺產繼承與特留分實務",
  "family-trust-and-asset-protection": "家族信託與資產保護",
  "testamentary-trusts-and-succession": "遺囑信託與身後傳承",
  "child-protection-and-education-trusts": "子女保障與教育信託",
  "retirement-trusts-and-guardianship": "安養信託與意定監護",
  "corporate-succession-and-equity-trusts": "企業傳承與股權信託",
  "marriage-contracts-and-property-regimes": "婚姻契約與財產制",
  "wills-and-advance-directives": "遺囑撰擬與預立醫療決定",
  administrative: "行政法",
  criminal: "刑法",
  "civil-procedure": "民事訴訟法",
}

function isNonLaborLawPrefix(prefix: string): boolean {
  return prefix.startsWith("/law") && !prefix.startsWith(LABOR_SITE_PREFIX)
}

function pickLongestNonLaborPrefixSlug(
  categorySlugs: Set<string>
): { slug: string; prefix: string } | null {
  let bestSlug: string | null = null
  let bestLen = -1
  for (const [wpSlug, prefix] of Object.entries(
    WP_CATEGORY_SLUG_TO_LAW_PATH_PREFIX
  )) {
    if (!isNonLaborLawPrefix(prefix)) continue
    if (!categorySlugs.has(wpSlug)) continue
    if (prefix.length > bestLen) {
      bestLen = prefix.length
      bestSlug = wpSlug
    } else if (prefix.length === bestLen && bestSlug !== null && wpSlug > bestSlug) {
      bestSlug = wpSlug
    }
  }
  if (bestSlug === null || bestLen < 0) return null
  const prefix = WP_CATEGORY_SLUG_TO_LAW_PATH_PREFIX[bestSlug]
  return prefix && isNonLaborLawPrefix(prefix) ? { slug: bestSlug, prefix } : null
}

/**
 * 麵包屑（民法／保險法／行政法／刑法／民事訴訟法詳頁）：依 WP 分類對照
 * `WP_CATEGORY_SLUG_TO_LAW_PATH_PREFIX`，選**前綴最長**且**非 /law/labor** 的錨點 slug，
 * 再拆成路徑層；每層 label 優先 `categories.nodes` 的 `name`，否則用中文對照表。
 * 對不到任何符合條件的表列分類時：`首頁 » 法律 » 文章標題`。
 */
export function buildLawArticleBreadcrumb(
  categories: Array<{ slug?: string; name?: string }> | undefined,
  postTitle: string
): BreadcrumbItem[] {
  const base: BreadcrumbItem[] = [
    { label: "首頁", href: "/" },
    { label: "法律", href: "/law" },
  ]

  const nodes = categories?.filter(Boolean) ?? []
  const slugSet = new Set(
    nodes
      .map((c) => c.slug?.trim())
      .filter((s): s is string => Boolean(s))
  )

  const picked = pickLongestNonLaborPrefixSlug(slugSet)
  const title = postTitle.trim() || "文章"

  if (!picked) {
    return [...base, { label: title }]
  }

  const tail = picked.prefix.replace(/^\/law\/?/, "").replace(/\/+$/, "")
  const segments = tail.split("/").filter(Boolean)
  if (segments.length === 0) {
    return [...base, { label: title }]
  }

  const out: BreadcrumbItem[] = [...base]
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i] ?? ""
    if (!seg) continue
    const href = `/law/${segments.slice(0, i + 1).join("/")}`
    const node = nodes.find((c) => (c.slug ?? "").trim() === seg)
    const wpName = node?.name?.trim() ?? ""
    const label =
      wpName && wpName !== "法律"
        ? wpName
        : LAW_ARTICLE_BREADCRUMB_SLUG_LABEL[seg] ?? seg
    out.push({ label, href })
  }

  out.push({ label: title })
  return out
}
