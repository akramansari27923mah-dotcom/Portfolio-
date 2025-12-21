// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CardCertificate = ({ Image, name, where, CredentialID, link, id }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="md:flex  justify-center items-center gap-x-5 mt-10 px-5 py-5 rounded-md bg-black/30 snap-center">

            <div>

                {
                    id === 'google' ? <img
                        className="md:w-60 w-40 rounded-[5px]"
                        src={Image}
                    /> : <img
                        className="md:w-50 w-40 rounded-[5px]"
                        src={Image}
                    />
                }
            </div>

            <div
                className="flex flex-col justify-center gap-y-3 md:mt-0 mt-5">
                <p
                    className="text-[12px] md:text-base">
                    {name}

                </p>

                <p
                    className="text-[12px] md:text-base">
                    <span>Issuing organization : </span>
                    {where}
                </p>

                <p
                    className="text-[12px] md:text-base text-nowrap">
                    <span>Credential ID : </span>
                    {CredentialID}
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