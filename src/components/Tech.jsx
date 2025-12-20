import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div 
    id="tech" 
    className='flex flex-col w-full h-screen justify-center items-center gap-y-15 lg:gap-y-25 text-white  lg:px-16 md:px-32'>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-3xl bg-linear-to-r py-2 from-pink-500 to-blue-500 bg-clip-text text-transparent">

        <h1
          className="text-5xl ">
          Technologys
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-y-10 gap-x-20 flex-wrap ">

        <div
          className="flex flex-col justify-center items-center gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

          <FaHtml5
            size={100}
            className="text-orange-600 "
            title="HTML5"
          />

          <p
            className="text-2xl text-orange-600">
            Html5
          </p>
        </div>

        <div
          className="flex justify-center items-center flex-col gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

          <FaCss3
            size={100}
            className="text-blue-700 "
            title="CSS3"
          />

          <p
            className="text-2xl text-blue-700">
            Css3
          </p>
        </div>

        <div
          className="flex justify-center items-center flex-col gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

          <FaJs
            size={100}
            className="text-yellow-400 "
            title="JavaScript"
          />

          <p
            className="text-2xl text-yellow-400">
            JavaScript
          </p>
        </div>

        <div
          className="flex justify-center items-center flex-col gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

          <RiTailwindCssFill
            size={100}
            className="text-sky-400 "
            title="TailwindCss"
          />

          <p
            className="text-2xl text-sky-400">
            TailwindCss
          </p>
        </div>

        <div
          className="flex justify-center items-center flex-col gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

          <FaReact
            size={100}
            className="text-sky-600 "
            title="React.js"
          />

          <p
            className="text-2xl text-sky-600">
            React.js (learning)
          </p>
        </div>

      </motion.div>
    </div>
  )
}

export default Tech