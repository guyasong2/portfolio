"use client"
import Image from "next/image";
import { motion ,AnimatePresence } from "framer-motion";


export default function Home() {
  return (
    <>
      <motion.main
      initial = {{opacity: 0, y: -50}}
      animate= {{opacity: 2, y: 0}}
      transition = {{duration: 1}}
      className="pt-24">
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
        <h2 className="roboto text-3xl font-bold text-center text-white">
        Skills
        </h2>

        <article className="block">
        <div className="flex justify-between mb-1">
          <span className="text-lg font-medium text-white">
            HTML
          </span>
          <span className="text-lg font-medium text-white-700 text-white">
            95%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-gray-800 h-2.5 rounded-full w-[95%]" ></div>
        </div>
<br />

        <div className="flex justify-between mb-1">
          <span className="text-lg font-medium text-white">
            CSS
          </span>
          <span className="text-lg font-medium text-white-700 text-white">
            80%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-gray-800 h-2.5 rounded-full w-[80%]" ></div>
        </div>
<br />
        <div className="flex justify-between mb-1">
          <span className="text-lg font-medium text-white">
            TailwindCSS
          </span>
          <span className="text-lg font-medium text-white-700 text-white">
            90%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-gray-800 h-2.5 rounded-full w-[90%]" ></div>
        </div>
<br />

<div className="flex justify-between mb-1">
          <span className="text-lg font-medium text-white">
            UI/UX
          </span>
          <span className="text-lg font-medium text-white-700 text-white">
            75%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-gray-800 h-2.5 rounded-full w-[75%]" ></div>
        </div>
<br />
        <div className="flex justify-between mb-1">
          <span className="text-lg font-medium text-white">
            Javascript
          </span>
          <span className="text-lg font-medium text-white-700 text-white">
            80%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-gray-800 h-2.5 rounded-full w-[80%]" ></div>
        </div>
<br />
        <div className="flex justify-between mb-1">
          <span className="text-lg font-medium text-white">
            NextJs
          </span>
          <span className="text-lg font-medium text-white-700 text-white">
            70%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-gray-800 h-2.5 rounded-full w-[70%]" ></div>
        </div>
        </article>
        </div>
      </motion.main>
    </>
  );
}
