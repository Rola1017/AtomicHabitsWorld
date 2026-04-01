/** 文章頁左欄底部：精簡「關於本站」，高度較扁、淺藍底 */
export function LawAboutCompact() {
  return (
    <section
      id="about"
      aria-labelledby="about-compact-heading"
      className="scroll-mt-28 rounded-none border border-sky-200/90 bg-sky-50/90 px-5 py-4 shadow-sm sm:px-6 sm:py-5"
    >
      <h2
        id="about-compact-heading"
        className="mb-2 text-base font-bold text-[#1E293B] sm:text-lg"
      >
        關於本站
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-[#334155] sm:text-[15px]">
        相信最好的服務來自於「量身打造」，而這需要深厚的知識庫作為基礎。透過拆解書籍、研究新科技來提升自己，目標是將繁瑣的知識「遊戲化」，幫助更多人理解自身權益。
      </p>
    </section>
  )
}
