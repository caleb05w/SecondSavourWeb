import React from 'react'
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className='flex min-w-[full]  px-[5%] bg-[#FFF5DB] pt-[1%]'>

    <div className='w-[10%]'> Logo </div>
      <div className='overflow-hidden flex gap-[0.5%] justify-end min-w-[90%]'>
          <div className='button-container'><h2>Our Story</h2></div>
          <div className='button-container'> <h2>Our Team</h2></div>
          <div className='button-container'><a href='/blog'> <h2>Our Blog</h2></a></div>
      </div>

    </div>
  )
}

export default Navbar
