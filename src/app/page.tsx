import Intro from "@/components/ui/intro/mainIntro"
import Button from "@/components/layout/Button/Button"
import LayerBox from "@/components/layout/Box/layerBox"
import S from "@/app/page.module.css"

export default function Home() {
  return (
    <main>
      <section>
        <Intro />
        <Button />
        <div className={S.container}>
  <LayerBox image="/images/send_kakao.jpg" title="카카오톡 접수" description="상단의 카카오톡 접수 버튼을 클릭하시면
카카오톡 친구추가 링크로 넘어가실 수 있습니다.

혹은 아래의 카카오톡 계정을 추가하시어 
이미지를 발송해 주시길 바랍니다." />
  <LayerBox image="/images/send_email.jpg" title="이메일 접수" description="..." />
  <LayerBox image="/images/visit_studio.jpg" title="매장방문 접수" description="..." />
</div>
      </section>
    </main>
  )
}