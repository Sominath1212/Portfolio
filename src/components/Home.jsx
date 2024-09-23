import React from 'react'
import profile from '../assets/profile.jpg'
import { Typewriter, Cursor } from 'react-simple-typewriter'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';
function Home() {


  const text = Typewriter(
    {
      words: ["WEB DEVELOPER", "FRONTEND DEVELOPER ", `REACT DEVELOPER `, "JAVA DEVELOPER"],
      loop: 'infinate',
      typeSpeed: 200,
      delaySpeed: 40
    }
  )
  return (
    <div name="home" className='  h-screen  flex md:flex-row-reverse flex-col md:text-left text-center    justify-evenly items-center  top-12 py-20 align-middle bg-[#6DAFFE]'>
      <div>
        <img src={profile} className='w-48 rounded-full  border-gray-700 border-[2px]' alt="profile picture" />
      </div>
      <div>
        <h1 className='text-3xl my-4'> Hey Their,</h1>
        <h1 className='text-5xl my-4' >I'am <span className='text-[#437fc7]'>Sominath</span></h1>
        <span className='text-[#437fc7] text-2xl'>{text} <Cursor /> </span>
        <br />
        <a href="#" className=" my-4 relative inline-flex items-center px-1 py-1 overflow-hidden text-lg font-medium text-[#3d5676] border-2 border-gray-700 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#6DAFFE] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">

          </span>
          <Link to="contacts"> <span className="relative transition animate-pulse">Hire me </span></Link>
        </a>
        <span className='flex text-xl gap-4'>

          <a href="https://www.instagram.com/_s_patil12/" target="_blank"><FaInstagramSquare className='hover:scale-95  duration-300 hover:animate-bounce' /></a>
          <a href="linkedin.com/in/sominath-girnare-b1761b26a" target="_blank"> <FaLinkedin className='hover:scale-95  duration-300 hover:animate-bounce' /></a>
          <a href='https://github.com/Sominath1212' target="_blank"><FaGithub className='hover:scale-95  duration-300 hover:animate-bounce' /></a>
        </span>
      </div>

    </div>
  )
}

export default Home