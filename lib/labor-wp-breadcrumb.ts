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
