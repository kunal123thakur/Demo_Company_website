import React from "react";
import { motion } from "framer-motion";

const Page1 = () => {
  return (
    <div className="h-screen w-full bg-gray-600 flex flex-col items-center justify-center relative rounded-t-lg">
      <h1 className="text-[8.5vw] uppercase font-extrabold leading-[8.5vw]">
      web devel
        <span className="inline-block ml-2">
          <svg
            className="c-bttn__morph w-[6vw] h-[6vw] rounded-full bg-[#46898e]"
            fill="none"
            viewBox="0 0 131 136"
          >
            <path
              className="g-path"
              data-morph="end"
              fill="#fff"
              d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
            />
            <path
              className="g-path"
              data-morph="start"
              fill="#fff"
              d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
            />
          </svg>
        </span>
        pment
      </h1>
      <h1 className="text-[8.5vw] uppercase font-extrabold leading-[8.5vw]">DESIGN Agency</h1>
      <p className="text-center font-normal mt-[3vh] text-[1vw]">
        We partner with AI &amp; ML businesses, guiding them from series A <br />
        to series D and beyond with our expertise in
      </p>
      <div className="flex items-center justify-center">
        <h4 className="font-normal text-[1vw] lowercase mt-[0.5vw] px-4 py-2 border border-gray-400 rounded-full">
          Brand design
        </h4>
        <h4 className="font-normal text-[1vw] lowercase mt-[0.5vw] px-4 py-2 border border-gray-400 rounded-full">
          User Experience
        </h4>
        <h4 className="font-normal text-[1vw] lowercase mt-[0.5vw] px-4 py-2 border border-gray-400 rounded-full">
          and
        </h4>
        <h4 className="font-normal text-[1vw] lowercase mt-[0.5vw] px-4 py-2 border border-gray-400 rounded-full">
          Digital product design
        </h4>
      </div>

      {/* Moving logos with Framer Motion */}
      <div className="relative overflow-hidden mt-[10vh] absolute bottom-3 w-[44%]">
        {/* Left blur */}
        <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-gray-900 to-transparent z-10 " />

        {/* Animated logos */}
        <motion.div
          className="flex space-x-4"
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        >
          {['forbes', 'adweek', 'pmi', 'wf', 'adweek', 'rd', 'pmi', 'webby','rd', 'pmi', 'webby','adweek', 'pmi', 'wf',].map((name, index) => (
            <img
              key={index}
              className="h-[1vw] mx-[1.2vw]"
              src={`https://lazarev.kiev.ua/la24/${name}.svg`}
              alt={name}
            />
          ))}
        </motion.div>

        {/* Right blur */}
        <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-transparent to-gray-900 z-10" />
      </div>
    </div>
  );
};

export default Page1;
