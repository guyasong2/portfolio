"use client"
import Image from "next/image";
import Hero from "../app/components/Hero"
import { motion ,AnimatePresence } from "framer-motion";
import router from "next/navigation";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
    <main>
      <motion.div 
      initial = {{opacity: 0, y: -50}}
      animate= {{opacity: 2, y: 0}}
      transition = {{duration: 1}}>
        <Hero />
      </motion.div>
    </main>
    </>
  );
}
