import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
    return (
        <div className='bg-black shadow-t flex text-white items-center justify-center text-center pt-1  gap-x-2 '>

            <IoLogoGithub className='cursor-pointer text-3xl'/>
            <FaLinkedin className='cursor-pointer text-3xl' />
            <FaInstagramSquare className='cursor-pointer text-3xl'  />
        </div>
    )
}

export default Footer
//   