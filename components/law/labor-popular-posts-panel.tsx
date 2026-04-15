import Image from "next/image"
import Link from "next/link"

import { LAW_RECOMMENDED_ARTICLES } from "@/config/law-recommended-articles"
import type { LaborSidebarPost } from "@/lib/wp-labor-sidebar-posts"

const PLACEHOLDER = "/placeholder.svg"

type LaborPopularPostsPanelProps = {
  posts: LaborSidebarPost[]
}

export function LaborPopularPostsPanel({ posts }: LaborPopularPostsPanelProps) {
  const recommended = LAW_RECOMMENDED_ARTICLES

  return (
    <section
      aria-labelledby="labor-popular-heading"
      className="rounded-none border border-sky-200/90 bg-sky-50/95 p-5 shadow-sm sm:p-6"
    >
      <h2
        id="labor-popular-heading"
        className="mb-4 border-b border-sky-200/80 pb-2 text-base font-bold text-[#1A2744] sm:text-lg"
      >
        熱門／推薦文章
      </h2>
      <div className="space-y-5">
        <div>
          <h3 className="mb-2 text-sm font-bold tracking-wide text-[#dc2626]">熱門文章</h3>
          {posts.length === 0 ? (
            <p className="text-sm text-[#64748b]">尚無熱門文章可顯示。</p>
          ) : (
            <ul className="divide-y divide-sky-200/70">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/law/labor/${encodeURIComponent(post.slug)}`}
                    className="flex gap-3 py-3 transition first:pt-0 last:pb-0 hover:bg-sky-100/50"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-slate-200/80">
                      <Image
                        src={post.featuredImageUrl || PLACEHOLDER}
                        alt=""
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-[15px] font-semibold leading-snug text-[#2563eb]">
                        {post.title}
                      </p>
                      <p className="mt-1 text-xs text-[#64748b]">{post.categoryLabel}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-sky-300/90 pt-4">
          <h3 className="mb-2 text-sm font-bold tracking-wide text-[#1A2744]">推薦文章</h3>
          {recommended.length === 0 ? (
            <p className="text-sm text-[#64748b]">尚未設定推薦文章。</p>
          ) : (
            <ul className="space-y-2">
              {recommended.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-sm px-1 py-1 transition hover:bg-sky-100/60"
                  >
                    <p className="line-clamp-2 text-[15px] font-semibold leading-snug text-[#2563eb]">
                      {item.title}
                    </p>
                    {item.categoryLabel ? (
                      <p className="mt-1 text-xs text-[#64748b]">{item.categoryLabel}</p>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
