import { LABOR_AUTHORITY_LINKS } from "@/config/labor-authority-links"

export function LaborAuthorityLinksPanel() {
  return (
    <section
      aria-labelledby="labor-authority-heading"
      className="rounded-none border border-emerald-200/90 bg-emerald-50/95 p-5 shadow-sm sm:p-6"
    >
      <h2
        id="labor-authority-heading"
        className="mb-4 border-b border-emerald-200/80 pb-2 text-base font-bold text-emerald-950 sm:text-lg"
      >
        勞保新聞、最新政策
      </h2>
      <ul className="space-y-3 text-sm">
        {LABOR_AUTHORITY_LINKS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-900 underline-offset-2 transition hover:text-emerald-700 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
