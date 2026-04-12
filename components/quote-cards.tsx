interface QuoteCardProps {
  category: string
  categoryTextColor: string
  categoryBgColor: string
  cardGradient: string
  borderColor: string
  title: string
  author: string
  authorEn: string
  quoteZh: string
  quoteEn: string
  quoteZhNoWrap?: boolean
}

function QuoteCard({ 
  category, 
  categoryTextColor, 
  categoryBgColor,
  cardGradient, 
  borderColor,
  title, 
  author, 
  authorEn, 
  quoteZh,
  quoteEn,
  quoteZhNoWrap
}: QuoteCardProps) {
  return (
    <div 
      className="p-5 text-center hover:shadow-2xl transition-shadow"
      style={{ 
        backgroundImage: cardGradient,
        borderRadius: '26px',
        border: `2px solid ${borderColor}`,
        boxShadow: '0 10px 24px rgba(16, 26, 58, 0.12)',
        backgroundClip: 'padding-box'
      }}
    >
      <span 
        className="block w-fit mx-auto px-3 py-1 rounded-full border text-sm font-medium mb-3"
        style={{ 
          color: categoryTextColor,
          backgroundColor: categoryBgColor,
          borderColor: categoryTextColor
        }}
      >
        {category}
      </span>
      <h3 className="text-[#101A3A] font-semibold text-base mb-2">{title}</h3>
      <p className="text-[#4b5563] text-sm mb-2 whitespace-nowrap">
        {author} ({authorEn})：
      </p>
      <p className={`text-[#4b5563] text-base leading-relaxed mb-2 ${quoteZhNoWrap ? "whitespace-nowrap" : ""}`}>
        「{quoteZh}」
      </p>
      <p className="text-[#6b7280] text-sm italic">
        &quot;{quoteEn}&quot;
      </p>
    </div>
  )
}

export function QuoteCards() {
  const quotes = [
    {
      category: "享受",
      categoryTextColor: "#FF6FB1",
      categoryBgColor: "#FFECF6",
      cardGradient:
        "linear-gradient(135deg, #FFE1F0 0%, #F3ECFF 42%, #FFFFFF 100%)",
      borderColor: "#FFB9DB",
      title: "動畫，遊戲，身歷其境",
      author: "阿爾伯特·愛因斯坦",
      authorEn: "Albert Einstein",
      quoteZh: "遊戲是研究的最高境界。",
      quoteEn: "Play is the highest form of research.",
    },
    {
      category: "記錄",
      categoryTextColor: "#39B4FF",
      categoryBgColor: "#E1F2FF",
      cardGradient: "linear-gradient(135deg, #D0EDFF 0%, #E8F7FF 45%, #FFFFFF 100%)",
      borderColor: "#A9DDFF",
      title: "閱讀，法律，科技",
      author: "瑪格麗特·富勒",
      authorEn: "Margaret Fuller",
      quoteZh: "今日的閱讀者，明日的領導者。",
      quoteEn: "Today a reader, tomorrow a leader.",
      quoteZhNoWrap: true,
    },
    {
      category: "成長",
      categoryTextColor: "#55E7D0",
      categoryBgColor: "#DFFBF6",
      cardGradient: "linear-gradient(135deg, #CCF6EE 0%, #E7F8FF 45%, #FFFFFF 100%)",
      borderColor: "#9BE9DB",
      title: "圖卡，心智圖，比喻",
      author: "艾德蒙·柏克",
      authorEn: "Edmund Burke",
      quoteZh: "真正的知識不在於你讀了多少，而在於你內化了多少。",
      quoteEn: "Reading without reflecting is like eating without digesting.",
    },
  ]

  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#101A3A] text-2xl font-bold mb-2 text-center">
          享受學習，樂在其中<span className="text-red-500" role="img" aria-label="heart">&#10084;&#65039;</span>
        </h2>
        <p className="text-[#6b7280] text-base mb-6 text-center">
          遊戲化思維與知識萃取，每天一點點<span role="img" aria-label="seedling">&#127793;</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} {...quote} />
          ))}
        </div>
      </div>
    </section>
  )
}
