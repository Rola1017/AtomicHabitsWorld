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

export type BreadcrumbItem = { label: string; href: string }

export function buildLaborArticleBreadcrumb(
  categories: Array<{ slug?: string; name?: string }> | undefined
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

  if (!leaf) return base

  const name = leaf.name?.trim()
  const slug = leaf.slug?.trim() ?? ""

  let href = "/law/labor"
  if (name && CATEGORY_NAME_TO_HREF[name]) {
    href = CATEGORY_NAME_TO_HREF[name]
  } else if (slug && CATEGORY_SLUG_TO_HREF[slug]) {
    href = CATEGORY_SLUG_TO_HREF[slug]
  }

  const label = name || slug || "文章"
  return [...base, { label, href }]
}
