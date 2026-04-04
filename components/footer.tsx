import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

// Custom Threads icon since Lucide doesn't have it
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.858-.712 2.04-1.175 3.42-1.339.959-.114 1.95-.09 2.953.071.003-.468-.034-.94-.112-1.41-.264-1.6-1.062-2.47-2.374-2.59-.87-.08-1.689.145-2.3.63-.57.453-.902 1.1-.94 1.822l-2.106-.09c.07-1.2.58-2.264 1.474-3.08 1.002-.912 2.376-1.387 3.973-1.374 1.938.025 3.396.723 4.332 2.073.755 1.09 1.128 2.535 1.109 4.297l.003.168c.013.18.02.36.02.54 0 .107-.002.214-.007.32 1.26.839 2.17 1.958 2.622 3.244.612 1.74.519 4.334-1.706 6.512C18.275 23.19 15.608 23.98 12.186 24zm1.203-9.834c-.924-.089-1.778-.053-2.53.106-.927.196-1.634.538-2.045.99-.416.458-.606.995-.568 1.598.036.587.316 1.1.79 1.445.534.387 1.27.583 2.128.567 1.065-.058 1.9-.452 2.48-1.172.483-.6.796-1.412.933-2.414-.381-.063-.775-.102-1.188-.12z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="w-full min-w-0 max-w-[100%] px-4 py-12 bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        {/* Main Footer Container with light blue background */}
        <div 
          className="w-full min-w-0 max-w-full rounded-[26px] p-6 text-center sm:p-8"
          style={{ 
            backgroundColor: '#EEF6FF',
            border: '1px solid rgba(57,180,255,.15)'
          }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-[200px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AtomicHabitsWorld-OV1EpY5UU1vffttWVWCcHGOdrWoPSF.png"
                alt="AtomicHabitsWorld Logo"
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Tagline */}
          <h3 className="text-[#101A3A] font-bold text-xl mb-4">每天一點點</h3>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <Link 
              href="#" 
              className="w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
            >
              <Facebook className="w-[18px] h-[18px]" />
            </Link>
            <Link 
              href="#" 
              className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-[18px] h-[18px]" />
            </Link>
            <Link 
              href="#" 
              className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            >
              <ThreadsIcon className="w-[18px] h-[18px]" />
            </Link>
            <Link 
              href="#" 
              className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
            >
              <Youtube className="w-[18px] h-[18px]" />
            </Link>
          </div>
          
          {/* Description */}
          <div className="mx-auto mb-6 max-w-md min-w-0 text-base leading-relaxed text-[#4b5563]">
            <p className="mb-2 break-words">
              這一切，源於我最愛的<span className="text-red-500">&#10084;&#65039;</span>一本書《Atomic Habits》
            </p>
            <p className="break-words">
              感謝James Clear的啟發<span>&#127793;</span>以及成長路上幫助我的每一個貴人<span>&#11088;</span>
            </p>
            <p>
              感恩<span>&#128591;</span>
            </p>
          </div>
          
          {/* Contact */}
          <div className="mb-6">
            <h4 className="text-[#101A3A] font-semibold text-base mb-2">聯絡</h4>
            <p className="text-[#6b7280] text-base">
              Email：sosturx@gmail.com
            </p>
            <p className="text-[#6b7280] text-base">
              合作：顧問 / 課程 / 演講
            </p>
          </div>
          
          <p className="text-sm mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-amber-400 via-lime-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              累積，終於，迎來質變
            </span>
            <span className="text-[#9ca3af]">&#128142;</span>
          </p>
          
          {/* Divider */}
          <div className="border-t border-gray-200/50 pt-6">
            <div className="flex min-w-0 flex-col items-center justify-between gap-2 text-sm text-[#9ca3af] sm:flex-row">
              <p className="max-w-full break-words text-center sm:text-left">
                © · 2026 AtomicHabitsWorld 每天一點點. All rights reserved.
              </p>
              <div className="flex shrink-0 flex-wrap justify-center gap-x-4 gap-y-1 sm:justify-end">
                <Link href="/privacy" className="hover:text-[#6b7280] transition-colors">
                  隱私權
                </Link>
                <span className="text-[#d1d5db]" aria-hidden>
                  ·
                </span>
                <Link href="#" className="hover:text-[#6b7280] transition-colors">
                  條款
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
