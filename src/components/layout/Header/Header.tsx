'use client'

import Link from "next/link"
import { MoonStarsIcon } from "@phosphor-icons/react"
import { ArrowUp } from "lucide-react"
import S from "./Header.module.css"

export default function Header(){
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
        <button type="button" className={`${S.themeBtn} ${S.dark}`} aria-label="theme-다크모드" role="다크모드">
          <MoonStarsIcon size={24} weight="fill" className={S.moon} color="var(--moon)"/>
        </button>
      </nav>
    </header>
  )
}