import { notFound } from "next/navigation"

import { fetchLaborPostByRequiredWpCategorySlug } from "@/lib/wp-labor-post"

export default async function DailyExamSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetchLaborPostByRequiredWpCategorySlug(
    decodeURIComponent(slug),
    "exam",
  )

  if (!post) notFound()

  return (
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
  )
}

