'use client'

import Link from "next/link"
import S from "@/components/layout/Button/Button.module.css"
import Image from 'next/image'

import { InstagramLogoIcon, PhoneCallIcon, QuestionIcon } from "@phosphor-icons/react"

function MenuButton(){
  return(
    <div className={S.menuContainer}>
      <ul className={S.Buttons}>
        <li className={S.tapMenu}>
          <Link href="/" className={S.category}>
            <Image src="/kakao.svg" alt="로고" width={40} height={40} />
            <span>카카오톡 사진접수</span>
          </Link>
        </li>
        <li className={S.tapMenu}>
          <Link href="/" className={S.category}>
          <QuestionIcon size={40} weight="fill" />
            <span>자주 묻는 질문</span>
          </Link>
        </li>
        <li className={S.tapMenu}>
          <Link href="/" className={S.category}>
            <PhoneCallIcon weight="fill" size={40} />
            <span>사진관 전화</span>
          </Link>
        </li>
        <li className={S.tapMenu}>
          <Link href="/" className={S.category}>
          <InstagramLogoIcon weight="fill" size={40} />
            <span>인스타그램</span>
          </Link>
        </li>
        <li className={`${S.tapMenu} ${S.menu}`}>
          <Link href="/" className={`${S.category} ${S.menuLink}`}>
            <span>가격안내</span>
            <span className={S.moreView}>more view</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuButton