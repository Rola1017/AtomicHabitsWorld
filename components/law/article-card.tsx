import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArticleCardProps {
  title: string
  excerpt?: string
  category?: string
  href: string
  featured?: boolean
  variant?: "simple" | "detailed"
}

export function ArticleCard({ 
  title, 
  excerpt, 
  category = "法律", 
  href, 
  featured = false,
  variant = "simple"
}: ArticleCardProps) {
  if (variant === "simple") {
    return (
      <article 
        className="group rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F5 100%)',
          border: '1px solid #C9BFB0',
          boxShadow: '0 2px 8px rgba(139, 115, 85, 0.08)',
        }}
      >
        <h3 className="text-lg sm:text-xl font-bold text-[#1A2744] mb-3 group-hover:text-[#2A3754] transition-colors">
          {title}
        </h3>
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#6B5335] text-sm font-medium transition-colors"
        >
          繼續閱讀 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </article>
    )
  }

  return (
    <article 
      className="group rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F5 100%)',
        border: '1px solid #C9BFB0',
        boxShadow: '0 2px 8px rgba(139, 115, 85, 0.08)',
      }}
    >
      <h3 className="text-lg sm:text-xl font-bold text-[#1A2744] mb-3 group-hover:text-[#2A3754] transition-colors leading-snug">
        {title}
      </h3>
      
      {excerpt && (
        <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
      )}
      
      <Link 
        href={href}
        className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#6B5335] text-sm font-medium transition-colors"
      >
        繼續閱讀 
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </article>
  )
}
