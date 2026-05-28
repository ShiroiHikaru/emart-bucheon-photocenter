'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import S from "./layerBox.module.css"

interface LayerBoxProps {
  image: string
  title: string
  description: string | React.ReactNode
  delay?: number
}

function LayerBox({ image, title, description, delay = 0 }: LayerBoxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${S.layerBox} ${visible ? S.visible : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <Image src={image} className={S.image} alt={title} width={372} height={255} />
      <div className={S.content}>
        <h3 className={S.title}>{title}</h3>
        <p className={S.description}>{description}</p>
      </div>
    </div>
  )
}

export default LayerBox
