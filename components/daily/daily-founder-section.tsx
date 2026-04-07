import Link from "next/link"

export function DailyFounderSection() {
  const storyExcerpt = "我從一個什麼都不懂的門外漢...."
  const nameExcerpt = "兩個音節裡，藏著溫柔而強大的生命力🌱....."

  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div
          className="rounded-[26px] border p-6 shadow-sm sm:p-8"
          style={{
            background: "linear-gradient(135deg, #FFF6DE 0%, #FDEDE4 45%, #FFFFFF 100%)",
            borderColor: "rgba(243, 210, 122, 0.9)",
          }}
        >
          <div className="space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-[#101A3A]">
                <Link
                  href="/daily/founder-story"
                  className="cursor-pointer hover:text-[#2d3a5c] hover:underline underline-offset-4 transition-colors"
                >
                  創辦人的理念與故事
                </Link>
              </h2>
              <p className="text-base leading-relaxed text-[#4b5563]">
                {storyExcerpt}
              </p>
            </div>

            <div
              className="rounded-2xl border px-4 py-4 sm:px-5"
              style={{
                background: "linear-gradient(135deg, #EAF4FF 0%, #F5F0FF 100%)",
                borderColor: "rgba(147, 197, 253, 0.7)",
              }}
            >
              <h3 className="mb-3 text-xl font-semibold text-[#101A3A]">
                <Link
                  href="/daily/rola-name"
                  className="cursor-pointer hover:text-[#2d3a5c] hover:underline underline-offset-4 transition-colors"
                >
                  Rola這個名字
                </Link>
              </h3>
              <p className="text-base leading-relaxed text-[#4b5563]">
                {nameExcerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
