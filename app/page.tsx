import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { QuoteBanner } from "@/components/quote-banner"
import { HeroSection } from "@/components/hero-section"
import { QuoteCards } from "@/components/quote-cards"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { fetchLatestPublishedArticleHref } from "@/lib/wp-latest-post-href"

/** 與 WP 列表類 ISR 一致，首頁「最新文章」連結可定期更新 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: "AtomicHabitsWorld 每天一點點｜首頁",
  description:
    "AtomicHabitsWorld 每天一點點，整理法律、日常與學習成長內容，陪你用可執行的方法穩定累積長期進步。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AtomicHabitsWorld 每天一點點｜首頁",
    description:
      "AtomicHabitsWorld 每天一點點，整理法律、日常與學習成長內容，陪你用可執行的方法穩定累積長期進步。",
    url: "/",
    siteName: "AtomicHabitsWorld 每天一點點",
    type: "website",
    locale: "zh_TW",
  },
}

export default async function Home() {
  const latestArticleHref = await fetchLatestPublishedArticleHref()

  return (
    <main 
      className="min-h-screen"
      style={{
        background: `
          linear-gradient(rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.74)),
          url('/background-learning.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <Navigation />
      <QuoteBanner />
      <HeroSection />
      <QuoteCards />
      <AboutSection />
      <CTASection latestArticleHref={latestArticleHref} />
      <Footer />
    </main>
  )
}
