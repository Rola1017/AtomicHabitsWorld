import Link from "next/link"

export function AboutSection() {
  const skills = [
    { label: "數據分析", emoji: "&#128202;" },
    { label: "拆解重組", emoji: "&#128736;" },
    { label: "創造新生", emoji: "&#127793;" },
    { label: "聯合應用", emoji: "&#129513;" },
  ]

  return (
    <section id="about" className="w-full px-4 py-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div 
          className="p-6 hover:shadow-2xl transition-shadow"
          style={{ 
            backgroundImage: 'linear-gradient(135deg, #FFE9A8 0%, #FFD6C7 45%, #FFFFFF 100%)',
            borderRadius: '26px',
            border: '2px solid #F3D27A',
            boxShadow: '0 10px 24px rgba(16, 26, 58, 0.12)',
            backgroundClip: 'padding-box'
          }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left content */}
            <div className="flex-1">
              <h2 className="text-[#101A3A] text-2xl font-bold mb-4">
                <Link
                  href="/daily/about"
                  className="text-[#101A3A] hover:text-[#2d3a5c] hover:underline underline-offset-4 transition-colors"
                >
                  關於本站
                </Link>
              </h2>
              <p className="text-[#4b5563] text-base leading-relaxed">
                我喜歡關於愛迪生的那句名言：
                <br />
                「我沒有失敗。我只是發現了一萬種行不通的方法。」
                <br />
                I have not failed. I've just found 10,000 ways that won't work.
              </p>
            </div>
            
            {/* Right content - Skills（之後可擴充證照與經歷，錨點 #skills） */}
            <div 
              id="skills"
              className="w-full md:w-[19.5rem] rounded-xl p-4 border border-[#BFD7EA] scroll-mt-24"
              style={{ backgroundColor: '#F7FBFF' }}
            >
              <h3 className="text-[#101A3A] font-semibold text-base mb-3">
                <Link
                  href="#skills"
                  className="text-[#101A3A] hover:text-[#2d3a5c] hover:underline underline-offset-4 transition-colors"
                >
                  方向
                </Link>
              </h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#4b5563] text-base">
                    <span className="text-lg">&#8226;</span>
                    <span>{skill.label}</span>
                    <span dangerouslySetInnerHTML={{ __html: skill.emoji }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
