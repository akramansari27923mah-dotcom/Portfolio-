// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        id="contact"
        className='w-full lg:h-screen h-90 flex justify-center items-center flex-col md:px-20 z-20'>

        <div className="flex justify-center items-center flex-col gap-y-8">

          <h1
            className=' text-5xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'>
            Get In Touch
          </h1>

          <p
            className='text-gray-400 text-center'>
            Want to chat? Sent me an E-mail Through this button and l'll respond whenever i can
          </p>

          <a
            className='py-2 px-5 bg-black text-white rounded-xl border border-indigo-400 shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-3'
            target='_blank'
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akramansari27923mah@gmail.com">
            Contact me
          </a>

        </div>
      </motion.div>

    </>
  )
}

export default Contact