import Header from "@/components/layout/Header/Header";
import Intro from "@/components/ui/intro/mainIntro"
import Button from "@/components/layout/Button/Button"
import Footer from "@/components/layout/Footer/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <Intro />
        <Button />
      </section>
      <Footer />
    </main>
  )
}