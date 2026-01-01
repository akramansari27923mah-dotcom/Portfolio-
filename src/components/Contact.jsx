// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Tost from "./tostyfi/Tost";
import { toast } from "react-toastify";
  import confetti from "canvas-confetti";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const SERVICE_ID = 'service_prcx5ld';
  const TEMPLATE_ID = 'template_f5mmy9o';
  const PUBLIC_KEY = 'K2rM4-3Zu0DCu3cdS';



const fire = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
};

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParam = {
      user_name: name,
      user_email: email,
      message
    }
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParam,
        PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('form submitted')
          fire()
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        id="contact"
        className='w-full lg:h-screen h-140 flex justify-end md:justify-center items-center flex-col md:px-20 z-20'>

        <div className="flex justify-center items-center flex-col gap-y-8">

          <h1
            className=' text-5xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'>
            Get In Touch
          </h1>
          <form ref={form} onSubmit={sendEmail} className="text-white border border-gray-400 flex justify-center items-start p-7 rounded-lg flex-col gap-y-5 bg-black/40 backdrop-blur-md">
            <div className="flex flex-col gap-y-1">
              <label>
                Name
              </label>
              <input required value={name} onChange={(e) => setName(e.target.value)} name="user_name" className="border border-gray-600 focus:border-white p-2 rounded-lg w-80 outline-none" type="text" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>
                Email
              </label>
              <input required value={email} onChange={(e) => setEmail(e.target.value)} name="user_email" className="border border-gray-600 focus:border-white p-2 rounded-lg w-80 outline-none " type="text" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>
                Message
              </label>
              <textarea required value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="border border-gray-600 focus:border-white  p-2 rounded-lg w-80 outline-none " type="text" placeholder="Message..." />
            </div>
            <div className="flex justify-center items-center w-full">
              <button type="submit" className="py-2 px-5 bg-sky-400 rounded-lg hover:bg-sky-500 cursor-pointer">Send</button>
            </div>
          </form>
          <Tost />
        </div>
      </motion.div>

    </>
  )
}

export default Contact