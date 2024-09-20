"use client"
import React from 'react'

import Link from "next/link";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => (
      setMenuOpen(!menuOpen)
  )
  return (
    <nav className="fixed py-3 w-full top-0 pr-3 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex md:justify-around justify-between items-center h-full w-full px-4 2xl:px-16">
         <h1 className='font-bold text-3xl text-white relative'>Cguru</h1>
         <div>
           <ul className="hidden md:flex items-center">
             <Link href="/"><li className="ml-6 text-lg hover:border-b-2 hover:border-blue-900 text-white">Home</li></Link>
             <Link href="/skills"><li className="ml-6 text-lg hover:border-b-2 hover:border-blue-900 text-white">Skills</li></Link>
             <Link href="/projects"><li className="ml-6 text-lg hover:border-b-2 hover:border-blue-900 text-white">Projects</li></Link>


             <button className='ml-5 rounded-full bg-white text-sm font-semibold py-3 px-4 text-black hover:bg-gray-200'><a href="https://api.whatsapp.com/send/?phone=237683140781&text&type=phone_number&app_absent=0" target='_black'>Connect with me</a></button>
           </ul>
         </div>
         <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
           <AiOutlineMenu size={25} className='text-white'/>
         </div>
        </div>
        <div className={
         menuOpen 
         ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gradient-to-r from-cyan-500 to-blue-500  p-10 ease-in duration-500"
         : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
         <div className="flex w-full items-center justify-end">
           <div onClick={handleNav} className="cursor-pointer">
             <AiOutlineClose size={25} className='text-white'/> 
           </div>
         </div>
         <div className="md:flex-col py-4">
           <ul>
             <Link href="/"><li className="ml-6 py-3 text-lg hover:border-blue-900 text-white">Home</li></Link>
             <hr />
             <Link href="/skills"><li className="ml-6 py-3 text-lg hover:border-blue-900 text-white">Skills</li></Link>
             <hr />
             <Link href="/projects"><li className="ml-6 mb-4 py-3 text-lg  hover:border-blue-900 text-white">Projects</li></Link>

             <button className='rounded-full bg-white text-sm font-semibold py-3 px-4 text-black hover:bg-blue-800'><a href="https://api.whatsapp.com/send/?phone=237683140781&text&type=phone_number&app_absent=0" target='_black'>Connect with me</a></button>
           </ul>
         </div>
        </div>
     </nav>
  )
}

export default Navbar