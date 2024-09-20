"use client"
import Hero from "../app/components/Hero"
import { motion } from "framer-motion";


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
