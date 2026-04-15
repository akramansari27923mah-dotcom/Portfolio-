import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex w-full h-screen justify-center items-center text-white lg:mt-10 px-6 md:px-20"
    >
      <div className="flex flex-col items-center gap-y-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-full shadow-lg shadow-indigo-900 hover:-translate-y-3 transition-all duration-300"
            src="linkiden.png"
            alt="Akram Ansari MERN Stack Developer"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-y-3 max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            Akram Ansari | MERN Stack Developer
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Developer (React.js)",
                2000,
                "Building Full Stack Web Apps",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I build fast, responsive, and modern web applications using
            <span className="text-white"> React</span>,
            <span className="text-white"> Node.js</span>,
            <span className="text-white"> MongoDB</span>, and modern tools.
            Passionate about creating real-world solutions.
          </p>

          <a
            href="#contact"
            className="mt-4 px-6 py-2 cursor-pointer z-20 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
