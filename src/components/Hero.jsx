// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className='flex w-full h-screen justify-center items-center text-white lg:mt-20 px-16 md:px-32'>

      <div className="flex justify-center items-center gap-y-5 flex-col">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* profile image */}
          <img
            className='w-60 h-60 object-cover rounded-[50%] transition-all duration-300 cursor-pointer shadow-xl shadow-indigo-900 hover:-translate-y-5' src="dp.jpg"
          />
        </motion.div>


        {/* profile content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col justify-center items-center gap-y-2 max-w-180 text-center">

          <h1
            className="text-5xl bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-nowrap animate-pulse">
            Akram Ansari
          </h1>

          <h3
            className="text-3xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-light animate-pulse">
            Web Developer
          </h3>

          {/* for large-screen */}
          <p
            className="md:text-base text-pretty text-sm hidden md:block text-gray-400">
            Hi, I’m Akram Ansari, a front-end web developer.
            I build clean, responsive, and user-friendly websites using HTML, CSS, Tailwind CSS, and JavaScript.
            Currently, I’m learning React.js to create modern and interactive web applications.
            I enjoy turning ideas into real-world projects and continuously improving my development skills.
          </p>

          {/*for phone */}
          <p
            className="md:hidden">
            I'm Front-end Developer | HTML • CSS • Tailwind CSS • JavaScript • React (Learning)
          </p>
        </motion.div>

      </div>

    </div>
  )
}

export default Hero