import certificate from "../../data/cartificate"
import CardCertificate from "./CardCertificate"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <div
      id="Certificate"
      className="w-full min-h-screen text-white flex justify-center items-center flex-col mt-20 md:mt-10 gap-y-5">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className=" text-5xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Certificate
      </motion.h1>

      <div className="grid md:grid-cols-3 justify-center items-center gap-3 hide-scrollbar overflow-y-scroll">
        {
          certificate.map(({ Image, name, where, CredentialID, link, id }, index) => (
            <CardCertificate
            key={index}
              Image={Image}
              name={name}
              where={where}
              CredentialID={CredentialID}
              link={link} 
              id={id}
              />
              
          ))
        }
      </div>

    </div>
  )
}

export default Certificate