import Image from "next/image"

import { cn } from "@/lib/utils"

const BACKGROUND_IMAGE = "/law-category-background.jpg"

type LawHeroProps = {
  heroTitle: string[]
  heroLatin: string
  titleFontClassName: string
  latinFontClassName: string
}

export function LawHero({
  heroTitle,
  heroLatin,
  titleFontClassName,
  latinFontClassName,
}: LawHeroProps) {
  const renderHeroTitleLine = (line: string) => {
    const highlightClass = "text-glow"

    // 法律頁：高亮「權益」
    if (line.includes("權益")) {
      const parts = line.split("權益")
      return (
        <>
          {parts.map((part, idx) => (
            <span key={idx}>
              {part}
              {idx < parts.length - 1 ? (
                <span className={highlightClass}>權益</span>
              ) : null}
            </span>
          ))}
        </>
      )
    }

    // 勞保頁：高亮「權利」
    if (line.includes("權利")) {
      const parts = line.split("權利")
      return (
        <>
          {parts.map((part, idx) => (
            <span key={idx}>
              {part}
              {idx < parts.length - 1 ? (
                <span className={highlightClass}>權利</span>
              ) : null}
            </span>
          ))}
        </>
      )
    }

    return line
  }

  return (
    <section className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden rounded-none">
      {/* Background Image — solid overlays only, no gradient/mask at bottom edge */}
      <div className="absolute inset-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Law background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Midnight blue tint — uniform; keeps hero/content junction a hard horizontal line */}
        <div className="absolute inset-0 bg-[#1A2744]/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          className={cn(
            titleFontClassName,
            "text-xl sm:text-2xl md:text-3xl font-bold text-[#C4BCB0] tracking-[0.3em] mb-4 sm:mb-6 leading-[1.1]"
          )}
        >
          {heroTitle.map((line, idx) => (
            <span key={idx} className="inline">
              {renderHeroTitleLine(line)}
              {idx < heroTitle.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>

        <p
          className={cn(
            latinFontClassName,
            "w-[80%] mx-auto leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#C4B9A6] tracking-wide"
          )}
        >
          {heroLatin}
        </p>
      </div>

    </section>
  )
}
