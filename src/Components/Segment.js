import React from 'react'
import Boxes from '../assets/images/boxes.png'
import Button from '../Components/Button.js'

function Segment({header, Title, Text,  Image, ButtonText}) {
  return (
    <div className=''>

        <div className="rounded-[0.5rem] p-[5rem] bg-[#E7D9BF] ease-in-out duration-300">

            <div className='flex flex-row justify-between '>
                <div className='w-[46%] flex flex-col gap-[10%] text-left'>
                    <h3 className='text-gray-500'> {header} </h3>
                    <h1> {Title} </h1>
                    <p> {Text} </p>

                    <Button text={ButtonText} />

                </div>
                    <div className='relative top-10 hover:top-5 ease-in-out duration-300 max-w-[50%]'>
                        <img src={Image}></img>
                    </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default Segment
