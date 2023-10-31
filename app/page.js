import Navbar from "@/componentes/navbar/navbar"
import About from "@/componentes/abaut/abaut"
import Projects from "@/componentes/projects/project"
import Education from "@/componentes/Education/education"
import Contact from "@/componentes/Contact/Contact"

export default function Home() {
  return (
    <main className="flex flex-col bg-celeste-back  justify-center ">
      <Navbar />
      <div className="w-full flex flex-col px-16 py-4 h-screen content-center items-center justify-center">
      <About/>
      </div >
      
      <div className="w-full flex flex-col min-h-screen bg-celeste-light items-center justify-center">
      <Projects/>
      </div>
      <div className="w-full flex flex-col min-h-screen bg-celeste-dark items-center justify-center">
      <Education/>
      </div>
      
      <div className="w-full flex flex-col min-h-full bg-celeste-light ">
        <Contact/>
      </div>


     
    </main>
  )
}
