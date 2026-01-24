// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Project = ({ Image, title, desc, tag1, tag2, tag3, link, key }) => {

  return (

    <>
      <div
        key={key}
        className='w-full  flex flex-col justify-center items-center py-5 lg:py-5 '>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="card flex flex-col backdrop-blur-sm bg-black/20 justify-center lg:gap-y-0  items-center gap-x-10 border border-gray-700 rounded-2xl overflow-hidden w-90 md:w-110">

          <div>

            <a target="_blank" href={link}>
              <img className='md:w-110 w-90  h-45 object-cover' src={Image} alt={title} />
            </a>

          </div>

          {/* content */}
          <div className="flex flex-col justify-center gap-y-3 md:mx-2 my-3 px-2 ">

            <h1

              className='text-white font-bold'>
              {title}

            </h1>

            <p

              className='text-gray-400 max-w-lg text-sm sm:text-base'>
              {desc.slice(0,130)}...

            </p>

            <div className='text-white flex gap-x-2 '>

              <p

                className='py-1 text-sm px-2 lg:px-5 rounded-xl bg-black/70 '
                title={tag1}>
                {tag1}

              </p>

              {
                tag2 === 'TailwindCss' ?
                  <p
                    className='py-1 text-sm px-5 rounded-xl bg-black/70 '
                    title={tag2}>
                    {tag2}
                  </p> :
                  null
              }

              {
                tag2 === 'CSS' ?
                  <p
                    className='py-1 text-sm px-2 lg:px-5 rounded-xl bg-black/70 '
                    title={tag2}>
                    {tag2}
                  </p> :
                  null
              }

              {
                tag3 === 'JavaScript' ?
                  <p className='py-1 text-sm px-3 lg:px-5 rounded-xl bg-black/70 '
                    title={tag3}>
                    {tag3}
                  </p> :
                  null
              }

              {
                tag3 === 'TailwindCss' ?
                  <p
                    className='py-1 text-sm px-3 rounded-xl bg-black/70 ' 
                    title={tag3}>
                    {tag3}
                  </p> :
                  null
              }
              {
                tag2 === 'Tailwindcss' ? <p
                  className='py-1 text-sm px-3 rounded-xl bg-black/70 '
                  title={tag2}>
                  {tag2}
                </p> :
                  null
              }
              {
                tag3 === 'Firebase' ? <p
                  className='py-1 text-sm px-2 rounded-xl bg-black/70 '
                  title={tag3}>
                  {tag3}
                </p> :
                  null
              }

              <a
                className='py-1 text-sm px-3 lg:px-5 rounded-xl bg-black/70 text-nowrap'
                target='_blank'
                title='Visit Project'
                href={link}>
                Visit ✨
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </>
  )
}

export default Project