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
        <h2 className={S.sectionTitle}>접수 방법</h2>
        <div className={S.container}>
  <LayerBox delay={0} image="/images/send_kakao.jpg" title="카카오톡 접수" description={`상단의 카카오톡 접수 버튼을 클릭하시면\n카카오톡 친구추가 링크로 넘어가실 수 있습니다.\n\n혹은 아래의 카카오톡 계정을 추가하시어\n이미지를 발송해 주시길 바랍니다.\n\n사진은 '묶음으로 전송하기' 설정하신 후\n한번에 보내시어 접수 부탁드리겠습니다.`} />
  <LayerBox delay={200} image="/images/send_email.jpg" title="이메일 접수" description={`ephoto0401@naver.com 으로 보내주시면\n파일 확인 후 고객님의 카카오톡으로 연락드리겠습니다.\n\n이메일 접수 시 고객님의 성함, 연락처,\n인화 규격을 남겨주시면 보다 원활한 상담을\n받으실 수 있습니다.`} />
  <LayerBox delay={400} image="/images/visit_studio.jpg" title="매장방문 접수" description={<>
    {`매장방문을 통해 전문가와 상담하신 후\n촬영 및 인화, 각종 사진관련 문의를\n상담 받으실 수 있습니다.\n\n`}
    <span className={S.bold}>{`[영업시간]\n오전 10시 ~ 오후 08시\n주 2,4주차 일요일 휴무 (이마트와 동일)\n\n[매장 전화번호]\n032)652-4782`}</span>
  </>} />
</div>
      </section>
    </main>
  )
}