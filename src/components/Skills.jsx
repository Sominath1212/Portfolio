import React from 'react'
import Cart from './Cart'
import CIcon from '../assets/c.png'
import CPPIcon from '../assets/cpp.png'
import ReactIcon from '../assets/react.png'
import CSSIcon from '../assets/css3.png'
import DSAIcon from '../assets/dsa.png'
import JAVASCRIPTIcon from '../assets/javascript.png'
import TAILWINDIcon from '../assets/tailwind.png'
import JAVAIcon from '../assets/java.png'
import HTMLIcon from '../assets/html.png'
import VSCODEIcon from '../assets/visual-studio-code-svgrepo-com.png'
import GITIcon from '../assets/git-svgrepo-com.png'
import DATABASEIcon from '../assets/database-svgrepo-com.png'
import GITHUBIcon from '../assets/github-icon-1-logo-svgrepo-com.png'
function Skills() {

  return (


    <div name="skills" className='top-[3rem]  p-5  bg-[#6DAFFE]  pt-[3.8rem]'>
      <h1 className='text-4xl text-gray-700  '>SKILLS:</h1>
      <h2 className='text-[#437fc7] text-3xl'>FRONTED:</h2>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-4 '>
        <Cart name={"HTML"} image={HTMLIcon} percentage={90} />
        <Cart name={"CSS 3"} image={CSSIcon} percentage={60} />
        <Cart name={"JAVASCRIPT"} image={JAVASCRIPTIcon} percentage={70} />
        <Cart name={"TAILWIND  CSS"} image={TAILWINDIcon} percentage={60} />
        <Cart name={"REACT JS"} image={ReactIcon} percentage={56} />

      </div>
      <h2 className='text-[#437fc7] text-3xl'>
        BACKEND:
      </h2>

      <div className='grid md:grid-cols-5 grid-cols-2 gap-3 '>
        <Cart name={"C"} image={CIcon} percentage={80} />
        <Cart name={"C++"} image={CPPIcon} percentage={70} />
        <Cart name={" CORE JAVA"} image={JAVAIcon} percentage={70} />
        <Cart name={"DSA"} image={DSAIcon} percentage={40} />

      </div>
      <h2 className='text-[#437fc7] text-3xl'>OTHER TOLLS:</h2>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-4 '>
        <Cart name={"VS CODE"} image={VSCODEIcon} percentage={100} />
        <Cart name={"GIT "} image={GITIcon} percentage={100} />
        <Cart name={"GITHUB "} image={GITHUBIcon} percentage={100} />
      </div>
      <h2 className='text-[#437fc7] text-3xl'>DATABASE:</h2>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-4 '>

        <Cart name={"MY SQL "} image={DATABASEIcon} percentage={100} />
      </div>


    </div>

  )
}

export default Skills