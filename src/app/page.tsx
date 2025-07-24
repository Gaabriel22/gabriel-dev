import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"
import About from "@/components/home/About"
import Contact from "@/components/home/Contact"
import Hero from "@/components/home/Hero"
import Projects from "@/components/home/Projects"
import Services from "@/components/home/Services"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
