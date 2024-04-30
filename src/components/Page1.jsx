import React from "react";
import photo1 from "../assets/photo1.jpg";

import { PAGE1_CONTENT } from "../constants/index";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Page1 = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial="hidden"
              variants={container(0)}
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Howie
            </motion.h1>
            <motion.span
              initial="hidden"
              variants={container(0.2)}
              animate="visible"
              className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-3xl tracking-tight text-transparent"
            >
              前端工程師
            </motion.span>
            <motion.p
              initial="hidden"
              variants={container(0.4)}
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {PAGE1_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pb-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              src={photo1}
              alt="self"
              className="w-3/5 h-1/2 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
