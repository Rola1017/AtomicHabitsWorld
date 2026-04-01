export function stripHtml(html: string | null | undefined): string {
  if (html == null || html === "") return ""
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}
