import React from 'react'
import Boxes from '../assets/images/boxes.png'
import Button from '../Components/Button.js'

function SmallSegment({header, Title, Text,  Image, ButtonText}) {
  return (
    <div className='max-w-[100%]'>

        <div className="rounded-[0.5rem] py-[3rem] p-[2rem] bg-[#E7D9BF] h-[70vh]  ease-in-out duration-300">

                <div className='w-[100%] flex flex-col text-left justify-between h-[100%]'>
                    <h3 className='text-gray-500'> {header} </h3>
                    <h2> {Title} </h2>
                    <p className='mt-[2%]'> {Text} </p>

                    <div className='relative bottom-0 hover:bottom-5 ease-in-out duration-300 object-cover max-w-[100%] h-[100%]'>
                        <img className='m-auto'src={Image}></img>
                    </div>

                    <Button text={ButtonText} />

                </div>
            
        </div>
      
    </div>
  )
}

export default SmallSegment
