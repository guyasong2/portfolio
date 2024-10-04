"use client"
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import project2 from "@/public/project2.jpg";
import prject3 from "@/public/project3.jpg"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.section 
      initial = {{opacity: 0, y: -50}}
      animate= {{opacity: 2, y: 0}}
      transition = {{duration: 1}}
      className="pt-24">
        <h2 className="roboto text-3xl font-bold text-center text-white">
          Projects
        </h2>

        <div className="grid sm:grid-cols-4 gap-2 w-full sm:w-[80%] mx-auto m-6">
          <div className="col-span-2 w-full bg-white border border-gray-200 rounded-lg shadow bg-gray-800">
            <a href="https://udown.netlify.app/">
              <Image src={project2} alt="First Project done by Guy Asong" className="rounded-t-lg"/>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Youtube Video Downloader
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A simple Youtube Video downloader I built to help download my Youtube Videos easily. <br />
                Some technologies used are
              </p>
                <li>NextJs</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
              <br />
              <a href="https://udown.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Visit Website
                <AiOutlineArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
              </a>
            </div>
          </div>

          <div className="col-span-2 w-full bg-white border border-gray-200 rounded-lg shadow bg-gray-800">
          <a href="https://udown.netlify.app/">
              <Image src={prject3} alt="First Project done by Guy Asong" className="rounded-t-lg"/>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  URL Shortner
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A simple URL Shortner I built so I could master some Typescript functionalities. <br />
                Some technologies used are
              </p>
                <li>NextJs</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
              <br />
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Visit Website
                <AiOutlineArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
              </a>
            </div>
          </div>
          <u>
          <a className="flex items-center mt-4" href="https://github.com/guyasong2/">More Projects 
            <AiOutlineArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
          </a>
          </u>
        </div>
      </motion.section>
    </>
  );
}
