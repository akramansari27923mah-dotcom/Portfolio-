// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CardCertificate = ({ Image, name, where, CredentialID, link, }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="md:flex  justify-center flex-col items-center  gap-x-5 md:mt-10  rounded-lg bg-black/30 snap-center  border border-gray-400 md:overflow-hidden">

            <div>
                <img
                    className="md:w-105 w-110 md:h-50 h-45 object-cover rounded-t-lg"
                    src={Image}
                />
            </div>

            <div
                className="flex flex-col md:w-95 justify-center gap-y-3 md:mt-0 mt-2  p-2  md:py-2">
                <p
                    className="text-[10px] md:text-[12px] font-semibold tracking-widest">
                    {name}

                </p>

                <p
                    className="text-[10px] md:text-base">
                    <span>Issuing organization : </span>
                    {where}
                </p>

                <p
                    className="text-[10px] md:text-[13px] text-nowrap">
                    <span>Credential ID : </span>
                    {CredentialID.slice(0, 30)}
                </p>

                <a
                    title="Visit"
                    target="_blank"
                    className="py-2 px-3 border border-indigo-500 w-25 text-center rounded-sm backdrop-blur-sm bg-black/30 transition-all duration-300 hover:scale-105"
                    href={link}>
                    Visit
                </a>
            </div>
        </motion.div>
    )
}

export default CardCertificate