import Image from 'next/image'
import S from "./layerBox.module.css"

interface LayerBoxProps {
  image: string
  title: string
  description: string | React.ReactNode
}

function LayerBox({ image, title, description }: LayerBoxProps) {
  return (
    <div className={S.layerBox}>
      <h2 className={S.heading}>접수 방법</h2>
      <div className={S.content}>
        <Image src={image} className={S.image} alt={title} width={372} height={255}  />
        <h3 className={S.title}>{title}</h3>
        <p className={S.description}>{description}</p>
      </div>
    </div>
  )
}

export default LayerBox