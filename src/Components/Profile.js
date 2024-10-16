import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Profile({Name, Role, Image, Concentration, LinkedIn, Instagram}) {
  return (

    <div className='group flex flex-col w-[100%] rounded-[0.5rem] overflow-hidden mx-[0.25rem]'>
    <div className='rounded-[0.5rem]'>
    <img src={Image} alt='Caleb Wu, Project Coordinator scale' className='group-hover:scale-[1.1] ease-in-out duration-300 group-hover:brightness-75'></img>
    </div>
    <div className='absolute'>
    <div className='relative text-left text-white top-72 px-[1rem]'>
      <h3> {Name} </h3>
      <p className='font-thin mt-[5%]'> {Role} </p>
      <p className='font-thin'> {Concentration} </p>
      <div className='flex gap-[5%] mt-[5%]'>
      <a href={LinkedIn}><FaLinkedin className='hover:cursor-pointer hover:brightness-50 ease-in-out duration-300' target="_blank" rel="noopener noreferrer"/></a>
      <a href={Instagram}><FaInstagram className='hover:cursor-pointer hover:brightness-50 ease-in-out duration-300' target="_blank" rel="noopener noreferrer"/></a>
       
      </div>
    </div>
    </div>
  </div>
  )
}

export default Profile
