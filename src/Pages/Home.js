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

      <div className='min-h-lvh border-t-2 border-black min-w-lvw bg-orange-400'>
        <div className='text-center mt-[5%]'>
          <h1 className='text-4xl font-semibold'> Part 2 </h1>
          <h1 className='text-2xl font-semibold'> Grids, Margins, Padding, Display, Gap, Flex</h1>
        </div>

      <div className='mt-[5] border-2 bg-black'>
        <h1 className='text-2xl font-bold text-center mb-[5%] text-white'> Meet the Team</h1>

        <div className='grid grid-cols-3 gap-[0.5%]'>

          <div className='group ease-in-out duration-300 w-[100%] min-h-[30lvh] bg-black border-2 rounded-lg border-white px-[5%] py-[10%] hover:bg-white hover:border-black hover:cursor-pointer '>
            <h1 className=' ease-in-out duration-300 group-hover:text-black text-white text-center text-4xl'>Caleb Wu</h1>
            <h2 className='ease-in-out duration-300 group-hover:text-black text-white text-center text-2xl'>CTO</h2>
          </div>

          <div className='group ease-in-out duration-300 w-[100%] min-h-[30lvh] bg-black border-2 rounded-lg border-white px-[5%] py-[10%] hover:bg-white hover:border-black hover:cursor-pointer '>
            <h1 className=' ease-in-out duration-300 group-hover:text-black text-white text-center text-4xl'>Brandon Sun</h1>
            <h2 className='ease-in-out duration-300 group-hover:text-black text-white text-center text-2xl'>CFO</h2>
          </div>

          <div className='group ease-in-out duration-300 w-[100%] min-h-[30lvh] bg-black border-2 rounded-lg border-white px-[5%] py-[10%] hover:bg-white hover:border-black hover:cursor-pointer '>
            <h1 className=' ease-in-out duration-300 group-hover:text-black text-white text-center text-4xl'>Darren Lau</h1>
            <h2 className='ease-in-out duration-300 group-hover:text-black text-white text-center text-2xl'>CMO</h2>
          </div>

        </div>

        <div className='mt-[0.5%] flex gap-[0.5%]'>

        <div className='group ease-in-out duration-300 w-[70%] max-h-[5vh] bg-black border-2 rounded-lg border-white px-[5%] py-[10%] hover:bg-white hover:border-black hover:cursor-pointer '>
            <h1 className=' ease-in-out duration-300 group-hover:text-black text-white text-center text-4xl'>Darren Lau</h1>
            <h2 className='ease-in-out duration-300 group-hover:text-black text-white text-center text-2xl'>CMO</h2>
          </div>

          
        <div className='group ease-in-out duration-300 w-[30%] max-h-[5vh] bg-black border-2 rounded-lg border-white px-[5%] py-[10%] hover:bg-white hover:border-black hover:cursor-pointer '>
            <h1 className=' ease-in-out duration-300 group-hover:text-black text-white text-center text-4xl'>Darren Lau</h1>
            <h2 className='ease-in-out duration-300 group-hover:text-black text-white text-center text-2xl'>CMO</h2>
          </div>

        </div>

        <div className='my-[5%]'>
        <h1 className='text-lg text-center text-white'> First 3 boxes are created using grid columns, the last 2 boxes are created using display flex</h1>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home
