import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='bg-blue-400 rounded-b-sm  w-full top-12    flec bottom-0 left-0 items-center justify-center aling-center     transition duration-700  shadow-t py-3 flex  pt-1  gap-x-2 '>

            <a href='https://github.com/Sominath1212' target="_blank"><IoLogoGithub className='cursor-pointer text-3xl' /></a> 
            <a href='https://www.linkedin.com/in/sominath-girnare-b1761b26a/' target="_blank"><FaLinkedin className='cursor-pointer text-3xl' /></a>   
            <a href='https://www.instagram.com/sominath_girnare03/' target="_blank"><FaInstagramSquare className='cursor-pointer text-3xl' /></a> 
        </div>
    )
}

export default Footer
//   