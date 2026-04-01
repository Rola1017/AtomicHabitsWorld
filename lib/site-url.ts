import { headers } from "next/headers"

/** 公開網站根網址（https://你的網域），用於分享連結與 OG；未設時由請求 Host 推斷 */
export async function getSiteOrigin(): Promise<string> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  if (fromEnv) return fromEnv

  const h = await headers()
  const host = h.get("host") ?? "localhost:3000"
  const forwarded = h.get("x-forwarded-proto")
  const protocol =
    forwarded ?? (process.env.NODE_ENV === "production" ? "https" : "http")
  return `${protocol}://${host}`
}
