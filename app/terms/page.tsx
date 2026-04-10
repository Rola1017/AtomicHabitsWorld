import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "服務條款｜AtomicHabitsWorld 每天一點點",
  description: "AtomicHabitsWorld 每天一點點之服務條款。",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "服務條款｜AtomicHabitsWorld 每天一點點",
    description: "AtomicHabitsWorld 每天一點點之服務條款。",
    url: "/terms",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function TermsPage() {
  return (
    <div
      className="flex min-h-screen min-w-0 flex-col"
      style={{
        background: `
          linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)),
          url('/background-learning.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />

      <main className="mx-auto w-full min-w-0 max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <article className="rounded-2xl border border-[#101A3A]/10 bg-white/90 px-5 py-8 shadow-sm backdrop-blur-sm sm:px-10 sm:py-10">
          <p className="mb-2 text-sm text-[#6b7280]">最後更新：2026 年 4 月</p>
          <h1 className="mb-6 text-2xl font-bold tracking-tight text-[#101A3A] sm:text-3xl">
            服務條款
          </h1>
          <p className="mb-8 leading-relaxed text-[#4b5563]">
            歡迎使用「AtomicHabitsWorld 每天一點點」（以下簡稱「本網站」）。
            當您瀏覽或使用本網站內容，即表示您已閱讀、理解並同意遵守本服務條款。
          </p>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">一、使用者同意條款</h2>
            <p className="leading-relaxed text-[#4b5563]">
              您使用本網站即代表同意本條款與相關政策（如隱私權政策）。若您不同意本條款全部或一部，請停止使用本網站服務。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">二、網站使用規範</h2>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-[#4b5563]">
              <li>不得以任何方式干擾、破壞或嘗試入侵本網站系統與服務。</li>
              <li>不得利用本網站從事違法、侵權、誹謗、詐騙或其他不當行為。</li>
              <li>未經授權，不得大量擷取、重製或商業使用本站內容。</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">三、免責聲明</h2>
            <p className="leading-relaxed text-[#4b5563]">
              本網站內容以資訊分享與一般知識整理為目的，不構成法律、醫療、投資或其他專業意見。您因使用本站資訊所做之任何決策，應自行判斷並承擔風險。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">四、智慧財產權</h2>
            <p className="leading-relaxed text-[#4b5563]">
              本網站之文字、圖片、版面設計與其他內容，除另有註明外，均受著作權及相關智慧財產權法令保護。未經授權不得任意重製、散布、公開傳輸或改作。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">五、條款修訂</h2>
            <p className="leading-relaxed text-[#4b5563]">
              本網站保留隨時修訂本條款之權利，修訂後將公告於本頁並自公告時生效。您於條款更新後繼續使用本網站，視為同意修訂內容。
            </p>
          </section>

          <p className="mt-10 border-t border-stone-200 pt-8 text-center text-sm text-[#9ca3af]">
            <Link href="/" className="text-[#2563eb] hover:underline">
              返回首頁
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  )
}
