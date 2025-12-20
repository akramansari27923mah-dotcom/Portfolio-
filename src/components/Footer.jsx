
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <nav className=' text-white z-10 w-full flex gap-x-3 lg:gap-x-15 justify-around items-center  px-10 py-4 md:justify-evenly '>


                {/* quick links footer */}
                <motion.ul
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="flex sm:flex gap-x-3 lg:gap-10">

                    <a
                        href="#home"
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">

                        <li
                            title="Home">
                            Home
                        </li>

                    </a>

                    <a
                        href="#tech"
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">

                        <li
                            title="Tech">
                            Tech
                        </li>

                    </a>

                    <a
                        href="#project"
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">

                        <li
                            title="Project">
                            Project
                        </li>

                    </a>

                    <a
                        href="#contact"
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">

                        <li
                            title="Contact">
                            Contact
                        </li>

                    </a>

                </motion.ul>


                {/* social links footer */}
                <motion.ul
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className=" flex gap-x-3 sm:flex lg:gap-x-15">

                    <li
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500">

                        <a
                            title="Linkedin"
                            target="_blank"
                            href="https://www.linkedin.com/in/akram-ansari-55a68538a/">
                            <FaLinkedin />
                        </a>

                    </li>


                    <li
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
                        <a
                            title="Github"
                            target="_blank"
                            href="https://github.com/akramansari27923mah-dotcom">
                            <FaGithub />
                        </a>

                    </li>

                    <li
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-pink-500">

                        <a
                            title="Instagram"
                            target="_blank"
                            href="https://www.instagram.com/akram_ansari48/">
                            <FaInstagram />
                        </a>

                    </li>

                    <li
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-400">

                        <a
                            title="Twitter"
                            href="#">
                            <FaTwitter />
                        </a>

                    </li>
                </motion.ul>
            </nav>
        </div>
    )
}

export default Footer