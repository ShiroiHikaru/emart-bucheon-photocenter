'use client'

import { useEffect, useState } from 'react'
import S from './Footer.module.css'

function formatDateTime(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

export default function Footer() {
  const [now, setNow] = useState(formatDateTime(new Date()))

  useEffect(() => {
    const timer = setInterval(() => setNow(formatDateTime(new Date())), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className={S.footer}>
      <div className={S.inner}>
        <div className={S.bizInfo}>
          <span>상호명 : 이마트 부천점 포토센터</span>
          <span className={S.divider}>|</span>
          <span>사업주 : 지귀영</span>
          <span className={S.divider}>|</span>
          <span>사업자등록번호 : 328-23-00931</span>
          <span className={S.divider}>|</span>
          <span>이메일 : ephoto0401@naver.com</span>
        </div>
        <address className={S.address}>
          경기도 부천시 부천로1 부천역사쇼핑몰 이마트 부천점 4층 포토센터 (고객만족센터 앞)&nbsp;
          <span className={S.divider}>|</span>&nbsp;14637
        </address>
        <div className={S.bottom}>
          <small className={S.copyright}>
            COPYRIGHT &copy; 2026 by Bucheon Emart Photocenter All rights reserved
          </small>
          <small className={S.updateTime} suppressHydrationWarning>
            UPDATE TIME : {now}
          </small>
        </div>
      </div>
    </footer>
  )
}
