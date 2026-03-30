export function QuoteBanner() {
  return (
    <div className="w-full py-6 px-4" style={{ backgroundColor: '#001A4D' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white text-base font-medium">
          雅詩・蘭黛 (Estée Lauder)
        </p>
        <p className="text-white text-base mt-1.5">
          我並非夢想著成功。我是為之
          <span 
            className="font-bold"
            style={{ 
              color: '#FFEF00',
              textShadow: '0 0 10px rgba(255,239,0,.9), 0 0 20px rgba(255,239,0,.6), 0 0 32px rgba(255,220,0,.4)'
            }}
          >
            付出了行動
          </span>
          <span role="img" aria-label="muscle">&#128170;</span>
        </p>
        <p className="text-white/70 text-base mt-1.5 italic">
          I never dreamed about success. I <span className="underline">worked for it</span>.
        </p>
      </div>
    </div>
  )
}
