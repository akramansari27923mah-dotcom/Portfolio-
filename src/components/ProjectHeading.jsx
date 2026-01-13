
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const ProjectHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      id="project"
      className=" mb-15 lg:mt-0 mt-30 bg-linear-to-r py-2 from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl">
      Projetcs
    </motion.h1>
  )
}

export default ProjectHeading