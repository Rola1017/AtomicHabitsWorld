"use client"

import Link from "next/link"
import { useCallback, useState } from "react"

const CATEGORY_OPTIONS = [
  { key: "labor", label: "勞動社會法" },
  { key: "insurance", label: "保險法" },
  { key: "civil", label: "民法" },
  { key: "administrative", label: "行政法" },
  { key: "criminal", label: "刑法" },
  { key: "civil-procedure", label: "民事訴訟法" },
] as const

type CategoryKey = (typeof CATEGORY_OPTIONS)[number]["key"]

type SearchResultRow = {
  title: string
  slug: string
  href: string
  excerpt: string
}

export function LawSearchBox() {
  const [keyword, setKeyword] = useState("")
  const [selected, setSelected] = useState<Record<CategoryKey, boolean>>({
    labor: false,
    insurance: false,
    civil: false,
    administrative: false,
    criminal: false,
    "civil-procedure": false,
  })
  const [results, setResults] = useState<SearchResultRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const toggleCategory = useCallback((key: CategoryKey) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const handleSearch = useCallback(async () => {
    const q = keyword.trim()
    setError(null)
    if (!q) {
      setError("請輸入關鍵字")
      setResults([])
      return
    }

    const categories = CATEGORY_OPTIONS.filter((o) => selected[o.key]).map(
      (o) => o.key
    )

    setLoading(true)
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: q, categories }),
      })

      const json = (await res.json()) as {
        error?: string
        results?: SearchResultRow[]
      }

      if (!res.ok) {
        setError(json.error ?? "搜尋失敗")
        setResults([])
        setHasSearched(true)
        return
      }

      setResults(Array.isArray(json.results) ? json.results : [])
      setHasSearched(true)
    } catch {
      setError("網路錯誤，請稍後再試")
      setResults([])
      setHasSearched(true)
    } finally {
      setLoading(false)
    }
  }, [keyword, selected])

  return (
    <section
      aria-label="法律文章搜尋"
      className="rounded-none border border-[#D1C7B7] bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3">
          <label className="flex min-w-0 flex-1 flex-col gap-1 text-sm font-medium text-[#1A2744]">
            關鍵字
            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  void handleSearch()
                }
              }}
              placeholder="搜尋標題與內文…"
              className="w-full rounded-md border border-[#D1C7B7] bg-[#FDFCFA] px-3 py-2 text-[#334155] outline-none ring-emerald-700/30 placeholder:text-[#94a3b8] focus:border-emerald-700/50 focus:ring-2"
              autoComplete="off"
            />
          </label>
          <button
            type="button"
            onClick={() => void handleSearch()}
            disabled={loading}
            className="shrink-0 rounded-md bg-[#1A2744] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#243656] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "搜尋中…" : "搜尋"}
          </button>
        </div>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-2 text-sm font-medium text-[#1A2744]">
            分類範圍（可不選＝全部）
          </legend>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {CATEGORY_OPTIONS.map((opt) => (
              <label
                key={opt.key}
                className="flex cursor-pointer items-center gap-2 text-sm text-[#334155]"
              >
                <input
                  type="checkbox"
                  checked={selected[opt.key]}
                  onChange={() => toggleCategory(opt.key)}
                  className="size-4 rounded border-[#D1C7B7] text-emerald-800 focus:ring-emerald-700/40"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        {error ? (
          <p className="text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        {results.length > 0 ? (
          <ul className="mt-1 divide-y divide-[#e7e2d8] border-t border-[#e7e2d8] pt-3">
            {results.map((row) => (
              <li key={row.slug} className="py-3 first:pt-2">
                <Link
                  href={row.href}
                  className="group block rounded-md outline-none ring-emerald-700/30 focus-visible:ring-2"
                >
                  <span className="text-base font-semibold text-[#1A2744] underline-offset-2 group-hover:underline">
                    {row.title}
                  </span>
                  {row.excerpt ? (
                    <p className="mt-1 text-sm leading-relaxed text-[#64748b]">
                      {row.excerpt}
                    </p>
                  ) : (
                    <p className="mt-1 text-sm italic text-[#94a3b8]">（無摘要）</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        ) : hasSearched && !loading && !error && results.length === 0 ? (
          <p className="border-t border-[#e7e2d8] pt-3 text-sm text-[#94a3b8]">
            沒有符合的文章。
          </p>
        ) : null}
      </div>
    </section>
  )
}
