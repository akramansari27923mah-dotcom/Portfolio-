import React from "react";
import tools from "../data/tools";

const Tools = () => {
  return (
    <div className="space-y-10 md:mb-20 mt-10 md:mt-0 z-20">
      <h1 className="text-4xl text-white text-center">Tools</h1>

      <div className="flex justify-center items-center gap-15 flex-wrap">
        {tools.map((items, ind) => {
          const Icon = items.icon;
          return (
            <div key={ind} className=" text-white text-center transition-all duration-300 hover:scale-105 hover:-translate-y-5 cursor-pointer">
              {<Icon size={100} className={`${items.name === 'git' ? 'text-orange-700' : items.name === 'postman'? 'text-orange-600' : items.name === 'vercel'? 'text-gray-900' : ''}`} />}
              <p className="text-2xl pt-3">{items.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
