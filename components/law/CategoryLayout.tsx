import type { ReactNode } from "react"
import { Corinthia, Noto_Serif_TC } from "next/font/google"

import { Footer } from "@/components/footer"
import { LawAboutSection } from "@/components/law/law-about-section"
import { LawHeader } from "@/components/law/law-header"
import { LawHero } from "@/components/law/law-hero"

const notoSerifTC = Noto_Serif_TC({
  weight: ["700", "900"],
  subsets: ["latin"],
})

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
})

const BACKGROUND_IMAGE = "/law-category-background.jpg"

type CategoryLayoutProps = {
  heroTitle: string[]
  heroLatin: string
  children: ReactNode
  /**
   * default：外層米色框 + 內距（列表頁等）
   * flat：不包外層框，由子元件自帶白底等版面（例如 WP 文章詳頁）
   */
  contentFrame?: "default" | "flat"
}

export function CategoryLayout({
  heroTitle,
  heroLatin,
  children,
  contentFrame = "default",
}: CategoryLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Base warm beige color - bottommost layer */}
      <div className="fixed inset-0 -z-30 bg-[#E8E4DC]" />

      {/* Global Background - Fixed background image (watermark layer) */}
      <div
        className="fixed inset-0 -z-20 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
        }}
      />

      {/* Warm film overlay — thinner so watermark details stay visible */}
      <div className="fixed inset-0 -z-10 bg-[#E8E4DC]/45" />

      {/* Header */}
      <LawHeader />

      {/* Hero Banner */}
      <LawHero
        heroTitle={heroTitle}
        heroLatin={heroLatin}
        titleFontClassName={notoSerifTC.className}
        latinFontClassName={corinthia.className}
      />

      {/* Main Content Panel */}
      <main className="py-8 sm:py-12 md:py-16 relative">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 sm:gap-8 sm:px-6">
          {contentFrame === "flat" ? (
            children
          ) : (
            <div className="rounded-2xl border border-[#D1C7B7] bg-[#F6F4F0] p-6 shadow-md sm:p-8 md:p-10">
              {children}
            </div>
          )}

          {/* About block (kept consistent with current /law page visual) */}
          <LawAboutSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

