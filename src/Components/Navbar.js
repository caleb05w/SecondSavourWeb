import React from 'react'
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className='w-[100%] pt-[2%]'>

      <nav className='bg-transparent w-[100%] fixed z-10'>
        <div className='flex flex-row gap-[2%] w-[100%] justify-center'>
            <a href="/shop"><h3 className='px-[1.7rem] py-[1rem] bg-black w-fit text-white rounded-[0.5rem] hover:text-white hover:cursor-pointer hover:bg-[#0D6A3D] ease-in-out duration-300'>Our Products</h3></a>
            <a href="/map"><h3 className='px-[1.7rem] py-[1rem] bg-black w-fit text-white rounded-[0.5rem] hover:text-white hover:cursor-pointer hover:bg-[#0D6A3D] ease-in-out duration-300'>Our Locations</h3></a>
            <a href="/about"><h3 className='px-[1.7rem] py-[1rem] bg-black w-fit text-white rounded-[0.5rem] hover:text-white hover:cursor-pointer hover:bg-[#0D6A3D] ease-in-out duration-300'>About Us</h3></a>

        </div>
      </nav>


    </div>
  )
}

export default Navbar
