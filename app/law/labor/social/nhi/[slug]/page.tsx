import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArticleBreadcrumb } from "@/components/law/article-breadcrumb"
import { ArticleShare } from "@/components/law/article-share"
import { CategoryLayout } from "@/components/law/CategoryLayout"
import { LaborAuthorityLinksPanel } from "@/components/law/labor-authority-links-panel"
import { LawSearchBox } from "@/components/law/law-search-box"
import { LaborPopularPostsPanel } from "@/components/law/labor-popular-posts-panel"
import { LawArticleLegalDisclaimer } from "@/components/law/law-article-legal-disclaimer"
import { LawCertSection } from "@/components/law/law-cert-section"
import { getWpCategorySlugForSitePath } from "@/config/law-site-wp-slugs"
import { buildLaborArticleBreadcrumb } from "@/lib/labor-wp-breadcrumb"
import { getSiteOrigin } from "@/lib/site-url"
import { stripHtml } from "@/lib/strip-html"
import { fetchLaborPostByRequiredWpCategorySlug } from "@/lib/wp-labor-post"
import { fetchLaborSidebarPosts } from "@/lib/wp-labor-sidebar-posts"

const NHI_SITE_PATH = "labor/social/nhi"

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

function getNhiWpCategorySlug(): string {
  return getWpCategorySlugForSitePath(NHI_SITE_PATH)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug: rawSlug } = await params
  const slug = decodeURIComponent(rawSlug)
  const wpCat = getNhiWpCategorySlug()
  const post = await fetchLaborPostByRequiredWpCategorySlug(slug, wpCat)
  if (!post) {
    return { title: "文章" }
  }

  const siteOrigin = await getSiteOrigin()
  const pathBase = `/law/${NHI_SITE_PATH}`
  const canonical = `${siteOrigin}${pathBase}/${encodeURIComponent(slug)}`
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

export default async function NhiPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: rawSlug } = await params
  const slug = decodeURIComponent(rawSlug)
  const wpCat = getNhiWpCategorySlug()
  const post = await fetchLaborPostByRequiredWpCategorySlug(slug, wpCat)

  if (!post) {
    notFound()
  }

  const siteOrigin = await getSiteOrigin()
  const pathBase = `/law/${NHI_SITE_PATH}`
  const articleUrl = `${siteOrigin}${pathBase}/${encodeURIComponent(post.slug)}`
  const categoryLabels =
    post.categories?.nodes
      ?.map((c) => c.name?.trim())
      .filter((n): n is string => Boolean(n)) ?? []

  const breadcrumbItems = buildLaborArticleBreadcrumb(
    post.categories?.nodes,
    post.title
  )
  const sidebarPosts = await fetchLaborSidebarPosts(post.slug, 12)

  return (
    <CategoryLayout
      contentFrame="flat"
      variant="labor-article"
      heroTitle={["全民健保與二代健保"]}
      heroLatin="National Health Insurance."
    >
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-x-10 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex min-w-0 flex-col gap-8">
          <article
            className="w-full rounded-none border border-[#D1C7B7] bg-white p-6 text-[#334155] shadow-md sm:p-8 md:p-10"
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
            <div
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
            <LawArticleLegalDisclaimer />
            <ArticleShare url={articleUrl} title={post.title} />
          </article>

        </div>

        <aside className="flex w-full min-w-0 flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <LawSearchBox />
          <LaborAuthorityLinksPanel />
          <LaborPopularPostsPanel posts={sidebarPosts} />
          <LawCertSection className="rounded-none" />
        </aside>
      </div>
    </CategoryLayout>
  )
}
