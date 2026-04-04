import type { Metadata } from 'next'
import { Noto_Sans_TC, Noto_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansTC = Noto_Sans_TC({ 
  subsets: ["latin"],
  variable: '--font-noto-tc',
  weight: ['400', '500', '600', '700']
});

const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  variable: '--font-noto',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(
        process.env.NEXT_PUBLIC_SITE_URL.endsWith('/')
          ? process.env.NEXT_PUBLIC_SITE_URL
          : `${process.env.NEXT_PUBLIC_SITE_URL}/`
      )
    : undefined,
  title: 'AtomicHabitsWorld 每天一點點',
  description: '享受學習，樂在其中 - 遊戲化思維與知識萃取',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" className="overflow-x-hidden">
      <body
        className={`${notoSansTC.variable} ${notoSans.variable} min-w-0 overflow-x-hidden font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
