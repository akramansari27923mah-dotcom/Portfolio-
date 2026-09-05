import { Check, Contact, Smartphone } from "lucide-react";
import services from "../data/services";

const Services = () => {
  return (
    <div id="services" className="my-15 space-y-10 z-90">
      <h1 className=" text-5xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-center">
        Services
      </h1>

      <div className="grid md:grid-cols-3  rounded-lg sm:grid-cols-2 grid-cols-1 gap-5 ">
        {services?.map((items) => {
          const Icon = items?.icon;
          return (
            <div
              key={items?.id}
              className={`${items?.bg} p-5 rounded-lg border-l-2 border-indigo-600`}>
              <div>
                <div className="w-12 h-12 rounded-2xl border-indigo-600 border flex justify-center items-center shadow-2xl shadow-indigo-800 mb-5">
                  <Icon className=" text-blue-400" />
                </div>

                <span className="text-2xl text-white font-semibold text-nowrap">
                  {items?.title}
                </span>
                <div className="p-0.5 mt-3 rounded-full w-15 bg-indigo-500" />

                <p
                  className="text-gray-300 font-light text-sm mt-5 tracking-wide w-70 border-b border-gray-700 pb-5
              ">
                  {items?.description}
                </p>
              </div>

              <div className="my-5 space-y-2">
                {items?.features?.map((feature, ind) => (
                  <div key={ind} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-indigo-500 border flex justify-center items-center text-indigo-500">
                      <Check size={12} />
                    </div>
                    <span className="text-white font-light text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="flex justify-center items-center gap-3 rounded-4xl w-50 text-nowrap border border-indigo-600 text-indigo-500  py-2 px-4 hover:scale-105 hover:bg-indigo-800/50 cursor-pointer transition-all duration-300">
                <span>Contact with me </span>
                <Smartphone />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
