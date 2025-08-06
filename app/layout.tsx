import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '경인엔지니어링 - 필터, 저장탱크, 이온교환기 전문 제조업체',
  description: '2000년 설립 이래 필터, 코알레서, 저장탱크, 이온교환기 등 여과 및 정화 설비 전문 제조업체. 현대엔지니어링, 포스코, 삼성물산 파트너.',
  keywords: '필터, 코알레서, 저장탱크, 이온교환기, 활성탄필터, 여과설비, 정화설비, 경인엔지니어링, Purolite, Calgon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 