import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-2xl p-6 shadow-lg"
          style={{ background: 'linear-gradient(90deg, #FFE58F 0%, #36CFC9 100%)' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-[#101A3A] text-xl font-bold flex items-center gap-2">
                Hey! 想知道~我又發現什麼好玩的嗎
                <span className="text-2xl" role="img" aria-label="grinning face">&#128518;</span>
              </h2>
              <p className="text-[#101A3A]/70 text-base mt-1">
                Guess what cool things I&apos;ve discovered recently?
              </p>
            </div>
            
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-base font-medium rounded-full hover:opacity-90 transition-opacity shadow-md"
              style={{ backgroundColor: '#101A3A' }}
            >
              一起來探索吧！
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
