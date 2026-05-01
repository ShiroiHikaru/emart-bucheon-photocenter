import Link from "next/link"
import S from "./Header.module.css"

export default function Header(){
  return(
    <header className={S.header}>
      <div className={S.logo} aria-label="로고" role="메인페이지">
        <Link href="/" className="return-home">
          <span className="sr-only">메인으로 이동</span>
        </Link>
      </div>
      <nav className={S.nav}>
        <a href="#pricing">가격 안내</a>
        <a href="#faq">자주 묻는 질문</a>
        <button>🌙</button>
        <button>☀️</button>
      </nav>
    </header>
  )
}