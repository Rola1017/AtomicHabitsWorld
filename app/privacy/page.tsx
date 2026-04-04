import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "隱私權政策｜AtomicHabitsWorld 每天一點點",
  description:
    "AtomicHabitsWorld 每天一點點之隱私權政策：說明資料收集、使用目的、Cookie 與聯絡方式。",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "隱私權政策｜AtomicHabitsWorld 每天一點點",
    description:
      "個人品牌網站之隱私權政策：資料收集、使用目的、Cookie 與聯絡方式說明。",
    url: "/privacy",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default function PrivacyPage() {
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
            隱私權政策
          </h1>
          <p className="mb-8 text-[#4b5563] leading-relaxed">
            歡迎來到「AtomicHabitsWorld
            每天一點點」（以下簡稱「本網站」）。本政策說明當您瀏覽或使用本網站時，我們如何處理與您相關的資訊。使用本網站即表示您已閱讀並理解本政策內容。
          </p>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">一、資料收集說明</h2>
            <p className="mb-3 text-[#4b5563] leading-relaxed">
              本網站為個人品牌性質，目前可能透過下列方式取得與您有關的有限資訊：
            </p>
            <ul className="list-disc space-y-2 pl-5 text-[#4b5563] leading-relaxed">
              <li>
                <span className="font-medium text-[#374151]">您主動提供：</span>
                若您透過電子郵件或網站上的聯絡方式與我們聯繫，我們會收到您提供的內容（例如姓名暱稱、電子郵件地址、訊息內文等）。
              </li>
              <li>
                <span className="font-medium text-[#374151]">技術與使用紀錄：</span>
                與多數網站相同，伺服器或分析／託管服務可能會自動記錄瀏覽資訊，例如 IP
                位址、瀏覽器類型、造訪時間、瀏覽的頁面路徑等（視實際使用的服務而定）。
              </li>
              <li>
                <span className="font-medium text-[#374151]">Cookie 與類似技術：</span>
                請一併參閱下方「Cookie 政策」說明。
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">二、使用目的</h2>
            <p className="mb-3 text-[#4b5563] leading-relaxed">
              我們僅在合理且與本網站營運相關的範圍內使用上述資訊，可能包括：
            </p>
            <ul className="list-disc space-y-2 pl-5 text-[#4b5563] leading-relaxed">
              <li>提供、維護與改善網站內容與使用體驗；</li>
              <li>回覆您的詢問或合作洽詢；</li>
              <li>進行匿名或匯整後的瀏覽統計，以了解內容成效（例如使用分析工具時）；</li>
              <li>維護網站與系統安全、防止濫用或違法行為；</li>
              <li>遵守法令或主管機關之合法要求（於必要範圍內）。</li>
            </ul>
            <p className="mt-3 text-[#4b5563] leading-relaxed">
              除法律另有規定或經您同意外，我們不會將您的個人資料出售給第三方，亦不會用於與上述目的明顯無關之用途。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">三、Cookie 政策</h2>
            <p className="mb-3 text-[#4b5563] leading-relaxed">
              Cookie
              是網站儲存在您裝置上的小型文字檔，用於辨識瀏覽階段或記住偏好設定。本網站或我們使用的第三方服務（例如網站分析、內容傳遞或字型載入）可能會使用
              Cookie 或類似技術（如本地儲存、像素標籤）。
            </p>
            <p className="mb-3 text-[#4b5563] leading-relaxed">一般而言可能包含：</p>
            <ul className="list-disc space-y-2 pl-5 text-[#4b5563] leading-relaxed">
              <li>
                <span className="font-medium text-[#374151]">必要性／功能性：</span>
                維持網站正常運作或記住基本設定。
              </li>
              <li>
                <span className="font-medium text-[#374151]">分析／效能：</span>
                了解造訪量與使用行為（多為匿名或去識別化統計）。
              </li>
            </ul>
            <p className="mt-3 text-[#4b5563] leading-relaxed">
              您可透過瀏覽器設定封鎖或刪除
              Cookie；若關閉部分
              Cookie，可能影響某些頁面功能或顯示效果。各瀏覽器之操作方式請參考官方說明。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">四、第三方服務</h2>
            <p className="text-[#4b5563] leading-relaxed">
              本網站可能嵌入或連結至第三方服務（例如分析工具、託管平台、字型或圖片來源）。該等服務有其獨立之隱私權條款，建議您一併閱讀。我們無法控制第三方如何處理資料，僅在選用服務時盡合理注意。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">五、資料保存與安全</h2>
            <p className="text-[#4b5563] leading-relaxed">
              我們會在達成收集目的所需期間內保存資料，並依一般合理可行之方式保護資料免於未經授權之存取、揭露或竄改。惟網路傳輸並非百分之百安全，無法保證絕對安全。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">六、政策修訂</h2>
            <p className="text-[#4b5563] leading-relaxed">
              本政策可能隨網站功能或法令變更而更新；修訂後版本將公布於本頁並註明更新日期。若您持續使用本網站，視為同意更新後之內容。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#101A3A]">七、聯絡方式</h2>
            <p className="mb-3 text-[#4b5563] leading-relaxed">
              若您對本隱私權政策有任何疑問，或欲行使個人資料相關權利（在適用法令允許範圍內），歡迎與我們聯繫：
            </p>
            <p className="rounded-lg border border-[#101A3A]/10 bg-[#f8fafc] px-4 py-3 text-[#374151]">
              <span className="font-medium text-[#101A3A]">電子郵件：</span>
              <a
                href="mailto:sosturx@gmail.com"
                className="text-[#2563eb] underline-offset-2 hover:underline"
              >
                sosturx@gmail.com
              </a>
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
