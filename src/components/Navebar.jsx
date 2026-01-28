import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaCode  } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className=' text-white fixed top-0 z-100 w-full flex justify-between items-center border-b-gray-300 border-b-[0.5px] bg-black/70 px-10 py-4 md:justify-evenly backdrop-blur-md'>

            {/* large screen */}
            {/* quick links */}
            <motion.a
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                href="#home"
                className="bg-linear-to-r flex gap-2 from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl font-semibold opacity-80 transition-all duration-300 hover:opacity-100 animate-pulse">
               <FaCode className="text-white" /> 
               <span>Akram</span>
            </motion.a>

            <motion.ul
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="hidden sm:flex gap-10">

                <a href="#home"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105">

                    <li
                        title="Home">
                        Home
                    </li>

                </a>

                <a
                    href="#tech"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105">

                    <li
                        title="Tech">
                        Tech
                    </li>

                </a>

                <a
                    href="#project"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105">

                    <li
                        title="Project">
                        Project

                    </li>

                </a>

                <a
                    href="#Certificate"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105">

                    <li
                        title="Certificate">
                        Certificate

                    </li>

                </a>

                <a
                    href="#contact"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105">

                    <li
                        title="Contact">
                        Contact

                    </li>

                </a>
                
                <a
                    href="https://akramansari27923mah-dotcom.github.io/Resume/resume.html"
                    target="_blank"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-105">

                    <li
                        title="Resume">
                        Resume
                    </li>

                </a>
            </motion.ul>


            {/* lagre screen */}
            {/* social media */}
            <motion.ul
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="hidden sm:flex gap-5">

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

                {/* <li
                    className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-400">

                    <a
                        title="Twitter"
                        href="#">
                        <FaTwitter />
                    </a>

                </li> */}
            </motion.ul>

            {/* phone menu */}
            {
                isOpen ? (
                    <MdClose
                        title="Close Menu"
                        className="block md:hidden lg:hidden cursor-pointer"
                        size={30}
                        onClick={menuOpen} />
                ) : (
                    <GiHamburgerMenu
                        title="Open Menu"
                        className="block md:hidden sm:hidden lg:hidden cursor-pointer"
                        size={30}
                        onClick={menuOpen} />
                )
            }

            {/* for phone */}
            {
                isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`fixed right-0 border-b rounded-bl-2xl top-17 flex h-screen w-1/2 flex-col gap-10 border-gray-800 border-l bg-black/70 ${isOpen ? 'block' : 'hidden'}`}>

                        {/* quick links */}
                        <ul className="flex flex-col gap-5 justify-start px-10 py-5 items-start ">

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

                            <a
                                href="#Certificate"
                                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">

                                <li
                                    title="Certificate">
                                    Certificate
                                </li>

                            </a>
                            <a
                                href="https://akramansari27923mah-dotcom.github.io/Resume/resume.html"
                                target="_blank"
                                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">

                                <li
                                    title="Resume">
                                    Resume
                                </li>

                            </a>
                        </ul>

                        {/* social links */}
                        <ul className="flex px-10 gap-5 flex-wrap">

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

                            {/* <li
                                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-400">

                                <a
                                    title="Twitter"
                                    target="_blank"
                                    href="#">
                                    <FaTwitter />
                                </a>

                            </li> */}

                        </ul>

                    </motion.div>
                )
            }
        </nav >
    )
}

export default Navebar


