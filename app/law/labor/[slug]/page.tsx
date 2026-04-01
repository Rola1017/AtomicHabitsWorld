import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArticleBreadcrumb } from "@/components/law/article-breadcrumb"
import { ArticleShare } from "@/components/law/article-share"
import { CategoryLayout } from "@/components/law/CategoryLayout"
import { buildLaborArticleBreadcrumb } from "@/lib/labor-wp-breadcrumb"
import { getSiteOrigin } from "@/lib/site-url"
import { stripHtml } from "@/lib/strip-html"
import { fetchLaborPostBySlug } from "@/lib/wp-labor-post"

function formatPostDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  const parts = new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(d)
  const y = parts.find((p) => p.type === "year")?.value
  const m = parts.find((p) => p.type === "month")?.value
  const day = parts.find((p) => p.type === "day")?.value
  if (y && m && day) return `${y}/${m}/${day}`
  return iso
}

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
  const { slug: rawSlug } = await params
  const slug = decodeURIComponent(rawSlug)
  const post = await fetchLaborPostBySlug(slug)
  if (!post) {
    return { title: "文章" }
  }

  const siteOrigin = await getSiteOrigin()
  const canonical = `${siteOrigin}/law/labor/${encodeURIComponent(slug)}`
  const rawDesc = post.excerpt
    ? stripHtml(post.excerpt)
    : stripHtml(post.content)
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

export default async function LaborPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: rawSlug } = await params
  const slug = decodeURIComponent(rawSlug)
  const post = await fetchLaborPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const siteOrigin = await getSiteOrigin()
  const articleUrl = `${siteOrigin}/law/labor/${encodeURIComponent(post.slug)}`
  const categoryLabels =
    post.categories?.nodes
      ?.map((c) => c.name?.trim())
      .filter((n): n is string => Boolean(n)) ?? []

  const breadcrumbItems = buildLaborArticleBreadcrumb(post.categories?.nodes)

  return (
    <CategoryLayout
      contentFrame="flat"
      heroTitle={[
        "1948 年《世界人權宣言》第 22 條：",
        "每個人都有獲得社會安全保障的權利",
      ]}
      heroLatin="Everyone, as a member of society, has the right to social security."
    >
      <article
        className="w-full rounded-2xl border border-[#D1C7B7] bg-white p-6 text-[#334155] shadow-md sm:p-8 md:p-10"
      >
        <ArticleBreadcrumb items={breadcrumbItems} />
        <h1
          className={`text-2xl font-bold text-[#1A2744] ${
            post.date || categoryLabels.length > 0 ? "mb-2" : "mb-6"
          }`}
        >
          {post.title}
        </h1>
        {(post.date || categoryLabels.length > 0) && (
          <div className="mb-6 space-y-2 text-sm text-[#6b7280]">
            {post.date ? (
              <p>發布日期：{formatPostDate(post.date)}</p>
            ) : null}
            {categoryLabels.length > 0 ? (
              <p>分類：{categoryLabels.join("、")}</p>
            ) : null}
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <ArticleShare url={articleUrl} title={post.title} />
      </article>
    </CategoryLayout>
  )
}
