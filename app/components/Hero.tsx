import React from 'react'
import Image from 'next/image'
import me from "@/public/me2-removebg.png"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'


const Hero = () => {
  return (
    <>
    <main className='pt-16 md:pt-24 w-full md:w-[90%] mx-auto grid sm:grid-cols-8 gap-20 sm:gap-4 md:gap-4 lg:gap-4'>
      <span className='bg-gray-200 rounded-tl-3xl rounded-bl-3xl sm:col-span-4'>
      <Image src={me} alt='Guy Asong'/>
      </span>

      <span className='sm:col-span-4 p-5 w-full'>
        <p className='josefin text-white text-3xl '>Welcome to</p>
        <h1 className='text-white font-bold roboto text-5xl md:text-5xl lg:text-9xl sm:text-5xl'>My Portfolio</h1>

        <p className='pb-2 text-black'>This portfolio is a representation of all what I have learned and accomplished as a frontend developer</p>
        <div className='social flex space-x-2'>
          <a href="https://www.facebook.com/dean.lewis.988711?mibextid=LQQJ4d" target='_blank'><AiFillFacebook size={40} className='text-black bg-gray-200 hover:text-blue-500 rounded-full p-2 cursor-pointer'/></a>
          <a href="https://www.instagram.com/guy.asong?igsh=MXNobmNxZmM4c3lzMw%3D%3D&utm_source=qr" target='_blank'><AiFillInstagram size={40} className='text-black bg-gray-200 hover:text-blue-500 rounded-full p-2 cursor-pointer'/></a>
          <a href="https://x.com/@guy_asong" target='_blank'><AiFillTwitterCircle size={40} className='text-black bg-gray-200 hover:text-blue-500 rounded-full p-2 cursor-pointer'/></a>
          <a href="https://www.linkedin.com/in/guy-asong-b8b1441b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'><AiFillLinkedin size={40} className='text-black bg-gray-200 hover:text-blue-500 rounded-full p-2 cursor-pointer'/></a>
          <a href="https://github.com/guyasong2/" target='_blank'><AiFillGithub size={40} className='text-black bg-gray-200 hover:text-blue-500 rounded-full p-2 cursor-pointer'/></a>
          <a href="https://youtube.com/@codeguru3204?si=fsOIJ42QLqLAsX1a" target='_blank'><AiFillYoutube size={40} className='text-black bg-gray-200 hover:text-blue-500 rounded-full p-2 cursor-pointer'/></a>
        </div>
      </span>
    </main>
    </>
  )
}

export default Hero
