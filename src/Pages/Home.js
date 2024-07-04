import React from 'react'
import '../output.css'
import '../input.css' //<-- Tailwind stylesheet
import gloriousPM from '../assets/images/gloriousPM.jpg'


function Home() {
  return (
    <div>
      <div className='bg-white min-h-lvh min-w-lvw'>

        <h1 className="text-4xl text-center font-semibold"> Second Savour </h1>
        <div className='m-[5%] border-black border-2 grid grid-cols-2 h-[60vh] overflow-hidden'>

          <div className='h-full w-full'>
          <img className='w-full h-full object-cover' src={gloriousPM} alt='Glorious PM' />
          </div>

          <div className='mx-[2%] my-[2%]'>
          <h1 className='text-4xl'>Justin Cheung</h1>
          <h2 className='text-2xl mt-[2%]'> Thanks to the exceptional leadership and vision of our Project Manager, Justin Cheung, our community's Second Savor initiative is thriving. His dedication and strategic approach have brought about significant improvements, fostering a sense of unity and progress among the people. Under his guidance, various programs and policies have been implemented, leading to increased economic stability, better social welfare, and enhanced opportunities for all. The positive impact of his efforts is evident in the flourishing state of our community, making it a time of prosperity and hope for everyone involved. </h2>
          </div>

        </div>

      <div className=' flex justify-center gap-[3%]'>

        <div className='bg-black w-fit h-fit px-[2%] py-[1%] rounded-full'>
          <h1 className='text-white'>Cool Button</h1>
        </div>

        <div className='bg-black w-fit h-fit px-[2%] py-[1%] rounded-full'>
          <h1 className='text-white'>Even Cool Button</h1>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home
