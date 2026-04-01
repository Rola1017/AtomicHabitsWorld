import { CategoryLayout } from "@/components/law/CategoryLayout"

export default function Loading() {
  return (
    <CategoryLayout
      heroTitle={[
        "1948 年《世界人權宣言》第 22 條：",
        "每個人都有獲得社會安全保障的權利",
      ]}
      heroLatin="Everyone, as a member of society, has the right to social security."
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="rounded-2xl border border-[#D1C7B7] bg-white/70 p-6 text-center text-[#6b7280] sm:p-8">
          載入文章中...
        </div>
      </div>
    </CategoryLayout>
  )
}

