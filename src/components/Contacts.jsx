import React from 'react'

function Contacts() {
  return (
    <div name="contacts" className='items-center  flex flex-col  bg-[#6DAFFE] pb-3 w-sceen  justify-center pt-20'>

      <h2 className='text-3xl text-gray-700'>Contact Me</h2>
      <form action="https://formspree.io/f/xoqggokk"
        method="POST" className=" pb-5 flex flex-col text-center items-center w-[30rem]
h-full  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
"
      >

        <label htmlFor="name" className='text-gray-700 text-xl  '>Name:</label>
        <input type="text" name='name' placeholder='Ennter your Name' required className='text-center rounded-lg h-9 w-[70%]  border-none ' /> <br />

        <label htmlFor="email" className='text-gray-700 text-xl  '>Email:</label>
        <input type="email" name='email' placeholder='Ennter your email' className='text-center  border-none  rounded-lg h-9 w-[70%]' required /> <br />

        <label htmlFor="message" className='text-gray-700 text-xl  '>Message:</label>
        <textarea name="message" id="" rows={3} className='text-center  border-none  rounded-lg h-9 w-[70%]' placeholder='Enter your message in detail'></textarea>

        <button className='bg-blue-500 mt-3 rounded-md px-2'>Submit</button>

      </form>


    </div>
  )
}

export default Contacts