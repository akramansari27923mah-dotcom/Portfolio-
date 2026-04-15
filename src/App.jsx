import Navebar from "./components/Navebar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Contact from "./components/Contact";
import projectData from "./data/projectdata";
import ProjectHeading from "./components/ProjectHeading";
import Footer from "./components/Footer";
import Certificate from "./components/Certifecate/Certificate";
import FireworkDemo from "./components/Fireworks/Firework";
import Ai_ChatBot from "./components/Ai_ChatBot";
import "animate.css";
import Services from "./components/Services";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Akram Ansari | MERN Stack Developer | React Portfolio</title>

        <meta
          name="description"
          content="Akram Ansari is a MERN Stack Developer skilled in React.js, Node.js and modern web technologies."
        />

        <meta
          name="keywords"
          content="Akram Ansari, MERN Developer, React Developer, Frontend Developer"
        />

        <meta property="og:title" content="Akram Portfolio" />
        <meta property="og:description" content="MERN Developer Portfolio" />
      </Helmet>
      <div className="w-full h-screen  fixed top-0">
        <FireworkDemo />
      </div>
      <div className="fixed inset-0 -z-10 h-screen w-full  items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center justify-center px-4 hide-scrollbar overflow-x-hidden">
        <Navebar />
        <Hero />
        <Tech />
        <ProjectHeading />

        <div className="grid md:grid-cols-2 gap-x-30 justify-center items-center">
          {projectData.map(
            ({ Image, title, desc, tag1, tag2, tag3, link }, index) => (
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
            ),
          )}
        </div>
        <Services />
        <Certificate />
        <Contact />
        <Footer />

        <Ai_ChatBot />
      </main>
    </>
  );
};

export default App;
