import { FaArrowRight } from "react-icons/fa";
import services from '../data/services'

const Services = () => {
  return (
    <div id="services" className='my-15 space-y-10'>
        <h1 className=' text-5xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-center'>Services</h1>

        <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
            {services.map((s,i) => (
                <div key={i} className='bg-black/30 border border-gray-200/30 text-white p-2 rounded-md'>
                <div className="flex items-center gap-2 mb-3">
                <FaArrowRight />
                    <h1 className='font-bold '>{s.title}</h1>
                </div>
                    <label className="font-semibold">{s.disc}</label>
                    <ul className='ml-10 text-sm my-4'>
                        <li>1 : {s.tag1}</li>
                        <li>2 : {s.tag2}</li>
                        <li>3 : {s.tag3}</li>
                    </ul>
                    <p className="text-sm">{s.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services