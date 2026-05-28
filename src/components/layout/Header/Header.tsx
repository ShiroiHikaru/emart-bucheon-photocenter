'use client'

import Link from "next/link"
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react"
import { ArrowUp } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import S from "./Header.module.css"

export default function Header(){
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return(
    <header className={S.header}>
      <div className={S.logo} aria-label="로고" role="메인페이지">
        <Link href="/" className={S.return_home}>
          <span className="sr-only" aria-label="메인이동" role="index이동">메인으로 이동</span>
        </Link>
      </div>
      <nav className={S.nav}>
        <Link href="#pricing" className={S.linkPage}>가격 안내</Link>
        <Link href="#faq" className={S.linkPage}>자주 묻는 질문</Link>
        <button type="button" className={`${S.themeBtn} ${S.returnTop}`} aria-label="top버튼" role="맨위로돌아가기" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUp size={24} className={S.topBtn} color="var(--deep)" />
        </button>
        <button
          type="button"
          className={`${S.themeBtn} ${S.dark}`}
          aria-label={isDark ? "라이트모드로 전환" : "다크모드로 전환"}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark
            ? <SunIcon size={24} weight="fill" color="var(--sunny)" />
            : <MoonStarsIcon size={24} weight="fill" color="var(--moon)" />
          }
        </button>
      </nav>
    </header>
  )
}