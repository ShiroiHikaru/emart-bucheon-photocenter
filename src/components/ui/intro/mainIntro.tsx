'use client'
import S from '@/components/ui/intro/intro.module.css'
import { MouseSimpleIcon } from "@phosphor-icons/react"
import { useEffect, useState } from 'react'

const TITLE = '2002년부터 소중한 순간을 기록해 온 24년의 노하우'

function MainIntro(){
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(TITLE.slice(0, i))
      if (i >= TITLE.length) {
        clearInterval(timer)
        setDone(true)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return(
    <div className={S.introContain}>
      <div className={S.intiroTitle}>
        <p className={S.mainTitle} aria-label='인삿말' role='introduce'>
          {displayed}
          <span className={`${S.cursor} ${done ? S.cursorBlink : ''}`}>|</span>
        </p>
        <p className={`${S.subTitle} ${done ? S.subVisible : ''}`} aria-label='추가인삿말' role='sub-introduce'>
          각종 증명사진부터 비디오 변환까지, 일상의 기록을 가장 빠르게 해결해 드립니다.
        </p>
      </div>
      <div className={S.mouseRole}>
        <MouseSimpleIcon className={S.mouseIcon} size={32} color='var(--white)'/>
        <span className={S.mouseScroll}>Scroll Down</span>
      </div>
    </div>
  )
}

export default MainIntro
