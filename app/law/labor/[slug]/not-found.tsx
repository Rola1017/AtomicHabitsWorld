import Link from "next/link"

import { CategoryLayout } from "@/components/law/CategoryLayout"

export default function LaborPostNotFound() {
  return (
    <CategoryLayout heroTitle={["找不到文章"]} heroLatin="Post not found.">
      <div className="rounded-2xl border border-[#D1C7B7] bg-white/80 p-6 text-center text-[#6b7280] sm:p-8">
        <p className="mb-4">
          此網址沒有對應文章。WordPress 的「網址代稱 (slug)」通常<strong>不等於</strong>標題；請從列表點「繼續閱讀」進入，或在後台確認該文的永久連結。
        </p>
        <Link
          href="/law/labor"
          className="inline-flex text-[#8B7355] font-medium underline underline-offset-2 hover:text-[#6B5335]"
        >
          回到勞動社會法列表
        </Link>
      </div>
    </CategoryLayout>
  )
}
