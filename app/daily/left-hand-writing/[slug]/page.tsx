import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DailySubcategoryBar } from "@/components/daily/daily-subcategory-bar"
import { getSiteOrigin } from "@/lib/site-url"
import { stripHtml } from "@/lib/strip-html"
import { fetchLaborPostByRequiredWpCategorySlug } from "@/lib/wp-labor-post"

function absolutizeOgImage(
  url: string | undefined | null,
  siteOrigin: string
): string {
  if (!url?.trim()) return `${siteOrigin}/icon.svg`
  const u = url.trim()
  if (u.startsWith("http://") || u.startsWith("https://")) return u
  return `${siteOrigin}${u.startsWith("/") ? "" : "/"}${u}`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const post = await fetchLaborPostByRequiredWpCategorySlug(
    decodedSlug,
    "left-hand-writing"
  )
  if (!post) return { title: "文章" }

  const siteOrigin = await getSiteOrigin()
  const canonical = `${siteOrigin}/daily/left-hand-writing/${encodeURIComponent(decodedSlug)}`
  const rawDesc = stripHtml(
    (post.excerpt?.trim() ? post.excerpt : null) ?? post.content ?? ""
  )
  const description = (rawDesc || post.title).slice(0, 160)
  const ogImage = absolutizeOgImage(
    post.featuredImage?.node?.sourceUrl ?? undefined,
    siteOrigin
  )

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      siteName: "AtomicHabitsWorld 每天一點點",
      type: "article",
      locale: "zh_TW",
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  }
}

export default async function DailyLeftHandWritingSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetchLaborPostByRequiredWpCategorySlug(
    decodeURIComponent(slug),
    "left-hand-writing",
  )

  if (!post) notFound()

  return (
    <div className="flex flex-col gap-6">
      <DailySubcategoryBar />

      <div className="rounded-2xl border border-[#D1C7B7] bg-white/80 p-6 shadow-md sm:p-8">
        <h1 className="text-2xl font-bold text-[#1A2744] mb-3">{post.title}</h1>
        {post.date ? (
          <p className="text-sm text-[#6b7280] mb-6">
            發布日期：{new Date(post.date).toLocaleDateString("zh-TW")}
          </p>
        ) : null}
        <div
          className="max-w-none text-[#334155] leading-relaxed [&_p]:mb-4 [&_h2]:mt-6 [&_h3]:mt-4"
          dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
        />
      </div>
    </div>
  )
}

