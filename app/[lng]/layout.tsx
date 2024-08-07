import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { languages } from '../i18n/settings'
import { LayoutProps } from '@/types'
import { dir } from 'i18next'
import { Providers } from './providers'

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Nextcj',
  description:
    'Ultimate Next.js essential starter template for success projects'
}

export default function RootLayout({ children, params: { lng } }: LayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${GeistSans.className} custom-scrollbar`}>
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  )
}
