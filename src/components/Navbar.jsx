import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from 'react-scroll';
function Navbar() {
    const [toggle, setToggle] = useState(true);
    return (
        <div className='z-10   flex justify-between items-center shadow-lg fixed  w-screen  text-gray-700 px-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  scroll-smooth' >
            <Link to='/'><h1 className='font-bold text-5xl cursor-pointer pl-3 text-gray-700 '>SG</h1></Link>

            <div className='  hidden  md:flex align-middle  justify-between items-center gap-4 pr-3'>
                <ul className=' flex justify-evenly gap-4 font-semibold'>
                    <Link to="home" className='relative inline-block  group cursor-pointer' >
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-red-500 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Home</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                    <Link to="projects" className="relative inline-block cursor-pointer group">
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-red-500 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Projects</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                    <Link to="skills" className="relative inline-block cursor-pointer group">
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-red-500 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Skills</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                    <Link to="contacts" className="relative inline-block cursor-pointer group">
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-red-500 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Contacts</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                </ul>
                <IoSettingsSharp className='cursor-pointer' />
            </div>
            {
                toggle ? <GiHamburgerMenu className='block md:hidden' onClick={() => { setToggle(false) }} />
                    : <IoCloseSharp className='block md:hidden' onClick={() => { setToggle(true) }} />
            }



            {/* responsive */}

            <div className={`flex w-full top-12 bg-black  md:hidden flex-col items-center justify-center aling-center ${toggle ? 'right-[-100%]' : 'right-0%'} fixed z-10  transition duration-700`}>
                <ul className=' align-middle justify-evenly gap-4 font-semibold'>
                    <Link to='home' className="relative block cursor-pointer group">
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Home</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                    <Link to="projects" className="relative block cursor-pointer group">
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Projects</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                    <Link to="skills" className="relative block cursor-pointer group">
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Skills</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                    <Link to="contacts" className="relative block cursor-pointer group">
                        <span className="relative z-10 block p-2  overflow-hidden  leading-tight text-gray-700 transition-colors duration-700 ease-out border-2 border-gray-700 rounded-lg group-hover:text-white border-none">
                            <span className="absolute inset-0 w-full  px-5  rounded-lg bg-transparent"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Contacts</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full  -mb-1 -mr-1 transition-all duration-700 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                </ul>
               
            </div>

        </div>
    )
}

export default Navbar