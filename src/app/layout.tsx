import localFont from 'next/font/local'
import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Providers from '@/components/layout/Providers'

const pretendard = localFont({
  src: '../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',  
})

export const metadata: Metadata = {
  title: "부천 이사진 - 증명사진 전문",
  description: "2002년부터 소중한 순간을 기록해 온 24년의 노하우. 각종 증명사진부터 비디오 변환까지.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}