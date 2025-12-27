import Navebar from './components/Navebar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Project from './components/Project'
import Contact from './components/Contact'
import projectData from './data/projectdata'
import ProjectHeading from './components/ProjectHeading'
import Footer from './components/Footer'
import Certificate from './components/Certifecate/Certificate'
import FireworkDemo from './components/Fireworks/Firework'

const App = () => {
  return (
    <>
      <div className='w-full h-screen fixed top-0 z-40'>
        <FireworkDemo />
      </div>
      <div className="fixed inset-0 -z-10 h-screen w-full  items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <main className='flex flex-col items-center justify-center px-4 overflow-x-hidden'>
        <Navebar />
        <Hero />
        <Tech />
        <ProjectHeading />

        <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-5 justify-center items-center'>
          {projectData.map(({ Image, title, desc, tag1, tag2, tag3, link, index }) => (

            <Project
              key={index}
              Image={Image}
              title={title}
              desc={desc}
              tag1={tag1}
              tag2={tag2}
              tag3={tag3}
              link={link}
            />
          ))}
        </div>
        <Certificate />
        <Contact />
        <Footer />
      </main>

    </>
  )
}

export default App
