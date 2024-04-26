import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import clsx from 'clsx'
import Environment from '@usecase/server/Environment'
import './globals.scss'

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plat web app',
  description: 'Plat 웹뷰',
  icons: {
    icon: [
      {
        url: '/static/favicon.ico',
        type: 'image/x-icon',
        sizes: '64x64',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <Environment>
        <body
          className={clsx(
            notoSansKr.className,
            'w-screen h-screen bg-orange-50',
          )}
        >
          <main className="pt-1.5 max-w-screen-sm mx-auto h-full bg-gray-50">
            {children}
          </main>
        </body>
      </Environment>
    </html>
  )
}
