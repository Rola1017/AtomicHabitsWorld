import Link from "next/link"

import type { LaborSidebarPost } from "@/lib/wp-labor-sidebar-posts"

const PLACEHOLDER = "/placeholder.svg"

type LaborPopularPostsPanelProps = {
  posts: LaborSidebarPost[]
}

export function LaborPopularPostsPanel({ posts }: LaborPopularPostsPanelProps) {
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
      {posts.length === 0 ? (
        <p className="text-sm text-[#64748b]">尚無其他文章可顯示。</p>
      ) : (
        <ul className="divide-y divide-sky-200/70">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/law/labor/${encodeURIComponent(post.slug)}`}
                className="flex gap-3 py-3 transition first:pt-0 last:pb-0 hover:bg-sky-100/50"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-slate-200/80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.featuredImageUrl || PLACEHOLDER}
                    alt=""
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
    </section>
  )
}
