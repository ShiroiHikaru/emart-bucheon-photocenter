import Link from "next/link"
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
        <button type="button" aria-label="theme-다크모드" role="다크모드">🌙</button>
        <button type="button" aria-label="theme-라이트모드" role="라이트모드">☀️</button>
      </nav>
    </header>
  )
}