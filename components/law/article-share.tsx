"use client"

import { Facebook, Instagram } from "lucide-react"

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.858-.712 2.04-1.175 3.42-1.339.959-.114 1.95-.09 2.953.071.003-.468-.034-.94-.112-1.41-.264-1.6-1.062-2.47-2.374-2.59-.87-.08-1.689.145-2.3.63-.57.453-.902 1.1-.94 1.822l-2.106-.09c.07-1.2.58-2.264 1.474-3.08 1.002-.912 2.376-1.387 3.973-1.374 1.938.025 3.396.723 4.332 2.073.755 1.09 1.128 2.535 1.109 4.297l.003.168c.013.18.02.36.02.54 0 .107-.002.214-.007.32 1.26.839 2.17 1.958 2.622 3.244.612 1.74.519 4.334-1.706 6.512C18.275 23.19 15.608 23.98 12.186 24zm1.203-9.834c-.924-.089-1.778-.053-2.53.106-.927.196-1.634.538-2.045.99-.416.458-.606.995-.568 1.598.036.587.316 1.1.79 1.445.534.387 1.27.583 2.128.567 1.065-.058 1.9-.452 2.48-1.172.483-.6.796-1.412.933-2.414-.381-.063-.775-.102-1.188-.12z" />
    </svg>
  )
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.057.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24.121-.291-.087-.103-.411-.457-.512-.688-.688-.381-.301-1.086-.488-1.086-.488l-.012.004C19.215 20.454 24 15.873 24 10.314" />
    </svg>
  )
}

const btnBase =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-white shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

const shareStyles = {
  fb: `${btnBase} bg-[#1877F2] hover:bg-[#1664d9] focus-visible:outline-[#1877F2]`,
  ig: `${btnBase} bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-95 focus-visible:outline-[#e6683c]`,
  threads: `${btnBase} bg-[#101010] hover:bg-black focus-visible:outline-[#101010]`,
  line: `${btnBase} bg-[#00B900] hover:bg-[#00a303] focus-visible:outline-[#00B900]`,
} as const

type ArticleShareProps = {
  url: string
  title: string
}

export function ArticleShare({ url, title }: ArticleShareProps) {
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  const threads = `https://www.threads.net/intent/post?text=${encodeURIComponent(`${title}\n${url}`)}`
  const line = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`

  const shareIg = async () => {
    const text = `${title}\n${url}`
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      /* ignore */
    }
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#e5e7eb] pt-6">
      <span className="text-sm font-medium text-[#6b7280]">分享</span>
      <a
        href={fb}
        target="_blank"
        rel="noopener noreferrer"
        className={shareStyles.fb}
        aria-label="分享到 Facebook"
        title="分享到 Facebook"
      >
        <Facebook className="h-5 w-5" strokeWidth={1.75} />
      </a>
      <button
        type="button"
        className={shareStyles.ig}
        onClick={shareIg}
        aria-label="複製連結並開啟 Instagram（限時動態請自行貼上）"
        title="複製連結並開啟 Instagram（網頁無法直接帶網址分享）"
      >
        <Instagram className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <a
        href={threads}
        target="_blank"
        rel="noopener noreferrer"
        className={shareStyles.threads}
        aria-label="分享到 Threads"
        title="分享到 Threads"
      >
        <ThreadsIcon className="h-5 w-5" />
      </a>
      <a
        href={line}
        target="_blank"
        rel="noopener noreferrer"
        className={shareStyles.line}
        aria-label="分享到 LINE"
        title="分享到 LINE"
      >
        <LineIcon className="h-5 w-5" />
      </a>
    </div>
  )
}
