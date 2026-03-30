import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 min-h-[420px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20beauty%20of%20learning-ijHaQj496musg95EEctih5jXxGM8Xx.jpg"
            alt="The Beauty of Learning - Ignite Your Creativity & Growth"
            width={1200}
            height={675}
            className="w-full min-h-[420px] md:min-h-[500px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
