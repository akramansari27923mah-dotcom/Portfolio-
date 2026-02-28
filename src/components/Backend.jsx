
import { motion } from 'framer-motion';
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from "react-icons/si"
import { BiLogoMongodb } from "react-icons/bi";

const Backend = () => {
    return (
        <div>
            <h1 className="text-3xl text-center">Backend</h1>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-y-10 my-10 md:mb-30 gap-x-20 flex-wrap ">

                <div
                    className="flex flex-col justify-center items-center gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

                    <FaNodeJs
                        size={100}
                        className="text-green-600 "
                        title="Node.js"
                    />

                    <p
                        className="text-2xl text-green-600">
                        Node.js
                    </p>
                </div>

                <div
                    className="flex justify-center items-center flex-col gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

                    <SiExpress
                        size={100}
                        className="text-white "
                        title="CSS3"
                    />

                    <p
                        className="text-2xl text-white">
                        Express.js
                    </p>
                </div>

                <div
                    className="flex justify-center items-center flex-col gap-y-3 transition-all duration-300 cursor-pointer hover:-translate-y-5 hover:scale-105">

                    <BiLogoMongodb
                        size={100}
                        className="text-green-400 "
                        title="JavaScript"
                    />

                    <p
                        className="text-2xl text-green-400">
                        MongoDB
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Backend