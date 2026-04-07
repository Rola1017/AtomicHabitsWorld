import { Navigation } from "@/components/navigation"
import { DailyFounderSection } from "@/components/daily/daily-founder-section"
import { Footer } from "@/components/footer"

export default function DailyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `
          linear-gradient(rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.74)),
          url('/background-learning.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">{children}</main>
      <DailyFounderSection />
      <Footer />
    </div>
  )
}
