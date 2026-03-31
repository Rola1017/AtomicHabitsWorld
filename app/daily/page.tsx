import Link from "next/link"

export default function DailyPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#101A3A] mb-4">日常</h1>
      <p className="text-[#4b5563] mb-8">請從上方選單選擇「考試」、「生活智慧王」或「左手寫字」。</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/daily/exam"
          className="rounded-full border border-[#101A3A]/15 bg-[rgba(255,226,210,.98)] px-6 py-2.5 text-[#101A3A] shadow-sm hover:opacity-90"
        >
          考試
        </Link>
        <Link
          href="/daily/life-wisdom"
          className="rounded-full border border-[#101A3A]/15 bg-[rgba(255,226,210,.98)] px-6 py-2.5 text-[#101A3A] shadow-sm hover:opacity-90"
        >
          生活智慧王
        </Link>
        <Link
          href="/daily/left-hand-writing"
          className="rounded-full border border-[#101A3A]/15 bg-[rgba(255,226,210,.98)] px-6 py-2.5 text-[#101A3A] shadow-sm hover:opacity-90"
        >
          左手寫字
        </Link>
      </div>
    </div>
  )
}
