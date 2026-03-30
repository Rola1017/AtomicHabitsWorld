import { Navigation } from "@/components/navigation"
import { QuoteBanner } from "@/components/quote-banner"
import { HeroSection } from "@/components/hero-section"
import { QuoteCards } from "@/components/quote-cards"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
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
      <CTASection />
      <Footer />
    </main>
  )
}
