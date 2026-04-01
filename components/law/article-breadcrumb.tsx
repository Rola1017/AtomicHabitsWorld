import Link from "next/link"

import type { BreadcrumbItem } from "@/lib/labor-wp-breadcrumb"

type ArticleBreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function ArticleBreadcrumb({ items }: ArticleBreadcrumbProps) {
  if (items.length === 0) return null

  return (
    <nav
      aria-label="麵包屑"
      className="mb-4 text-sm font-medium text-[#1A2744]"
    >
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => (
          <li
            key={`${item.label}-${item.href ?? "current"}-${i}`}
            className="inline-flex items-center gap-x-1.5"
          >
            {i > 0 ? (
              <span className="select-none text-[#64748b]" aria-hidden>
                »
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="underline-offset-2 transition hover:text-[#2563eb] hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-[#1A2744]"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
