// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Project = ({ Image, title, desc, tag1, tag2, tag3, link, key}) => {

  return (

    <>
      <div key={key}  className='w-full flex flex-col justify-center items-center py-10 lg:py-5  px-20 gap-y-10'>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
           className="card flex flex-col  lg:flex-row justify-center lg:gap-y-0 gap-y-5 items-center gap-x-10">

          <div>
            <a target="_blank" href={link}>
              <img className='w-80 h-45 object-cover rounded-2xl' src={Image} alt={title} />
            </a>

          </div>

          <div className="flex flex-col justify-center gap-y-5  ">
            <h1 className='text-white font-bold'>{title}</h1>
            <p className='text-gray-400 max-w-xl text-sm sm:text-base'>{desc}</p>
            <div className='text-white flex gap-x-2'>
              <p className='py-1 text-sm px-3 lg:px-5 rounded-xl bg-black/70 ' title={tag1}>{tag1}</p>

              {
                tag2 === 'TailwindCss' ? <p className='py-1 text-sm px-5 rounded-xl bg-black/70 ' title={tag2} >{tag2}</p> : null
              }
              {
                tag2 === 'CSS' ? <p className='py-1 text-sm px-2 lg:px-5 rounded-xl bg-black/70 ' title={tag2}>{tag2}</p> : null
              }

              {
                tag3 === 'JavaScript' ?
                  <p className='py-1 text-sm px-3 lg:px-5 rounded-xl bg-black/70 ' title={tag3}>{tag3}</p>
                  : null
              }
              {
                tag3 === 'TailwindCss' ?
                  <p className='py-1 text-sm px-3 rounded-xl bg-black/70 '>{tag3}</p>
                  : null
              }
              <a className='py-1 text-sm px-3 lg:px-5 rounded-xl bg-black/70 text-nowrap' target='_blank' title='Visit Project' href={link}>
                Visit Project
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </>
  )
}

export default Project