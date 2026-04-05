import services from '../data/services'

const Services = () => {
  return (
    <div id="services" className='my-15 space-y-10'>
        <h1 className=' text-5xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-center'>Services</h1>

        <div className='grid md:grid-cols-3 rounded-lg lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
           {services.map((service, i) => (
  <div
    key={i}
    className="bg-black/40 backdrop-blur-md border border-gray-200/20 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
  >
    {/* Title */}
    <h2 className="bg-white text-black text-center font-semibold py-2">
      {service.title}
    </h2>

    {/* Image */}
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-40 object-cover"
    />

    {/* Tags */}
    <div className="flex flex-wrap justify-center gap-2 p-3">
      {service.tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-white text-black text-xs rounded-full border border-gray-200"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
))}
        </div>
    </div>
  )
}

export default Services