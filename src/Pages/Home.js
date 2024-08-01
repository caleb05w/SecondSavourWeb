import React from 'react'
import '../output.css'
import '../input.css' //<-- Tailwind stylesheet
import gloriousPM from '../assets/images/gloriousPM.jpg'
import justin from '../assets/images/justin.png'
import justin2 from '../assets/images/justin2.png'
import justin3 from '../assets/images/justin3.png'


function Home() {
  return (
    <div>
      {/* <div className='bg-white min-h-lvh min-w-lvw'>

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

      </div> */}

      
<div className='text-lg mt-[5%] text-center'> Week 3 <br/>Images</div>
<div className='flex gap-5 py-[5%] w-100lvw justify-center overflow-hidden'>
  
{/* item> */}
  <div className='border border-gray-200 shadow-xl rounded-md max-w-[30%] h-fit group-hover:translate-y-10px group-hover:cursor-pointer ease-in-out duraiton-300'>
  <div className='h-[40vh] w-[100%] overflow-hidden'> <img className='h-[100%] w-[100%] object-cover' src={justin}></img> </div>
  <div className ='px-[7%] pt-[5%] pb-[3%]'>
    <h1 className='text-2xl'> Justin Cheung</h1>
    <h2 className='text-sm text-gray-600'> Male, 6ft, Straight</h2>
    <h3 className='mt-[5%]'> I'm looking for someone who shares my passion for innovation and making a positive impact. Someone who enjoys good food, great conversations, and isn't afraid to take on new challenges. If you appreciate a caring and driven individual with a knack for cooking and a love for gaming, I'd love to get to know you better.</h3>
      
    <h3 className='mt-[5%] text-sm text-red-500 hover:cursor-pointer hover:text-red-800 ease-in-out duration-300'> Report User</h3>

    <div className='flex gap-4 mt-[5%]'>
      <div className='group'>
      <div className='bg-black w-fit h-fit border-black border rounded-full m-0 px-[8px] mt-[3%] ease-in-out duration-300 group-hover:bg-white group-hover:color-black group-hover:border-black group-hover:cursor-pointer'>
        <div className='text-4xl text-white translate-y-[-5px] group-hover:text-black ease-in-out duration-300'>+</div>
      </div>
      </div>

      <div className='group'>
      <div className='bg-white w-fit h-fit border border-black rounded-full m-0 px-[13px] mt-[3%] ease-in-out duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:cursor-pointer'>
        <div className='text-4xl text-black translate-y-[-5px] group-hover:text-white ease-in-out duration-300'>-</div>
      </div>
      </div>
    </div>
    </div>
</div>

  
{/* item> */}
<div className='border border-gray-200 shadow-xl rounded-md max-w-[30%] h-fit group-hover:translate-y-10px group-hover:cursor-pointer ease-in-out duraiton-300'>
  <div className='h-[40vh] w-[100%] overflow-hidden'> <img className='h-[100%] w-[100%] object-cover' src={justin2}></img> </div>
  <div className ='px-[7%] pt-[5%] pb-[3%]'>
    <h1 className='text-2xl'> Justin Cheung</h1>
    <h2 className='text-sm text-gray-600'> Male, 6ft, Straight</h2>
    <h3 className='mt-[5%]'> Daddy's on the prowl for someone who's fun and isn't afraid to dive into exciting adventures. If you enjoy good food, great conversations, and intense gaming sessions, we might just be a perfect match. I'm here for a passionate connection with someone who shares my zest for life and isn't afraid to explore the physical side of a relationship.

</h3>
      
    <h3 className='mt-[5%] text-sm text-red-500 hover:cursor-pointer hover:text-red-800 ease-in-out duration-300'> Report User</h3>

    <div className='flex gap-4 mt-[5%]'>
      <div className='group'>
      <div className='bg-black w-fit h-fit border-black border rounded-full m-0 px-[8px] mt-[3%] ease-in-out duration-300 group-hover:bg-white group-hover:color-black group-hover:border-black group-hover:cursor-pointer'>
        <div className='text-4xl text-white translate-y-[-5px] group-hover:text-black ease-in-out duration-300'>+</div>
      </div>
      </div>

      <div className='group'>
      <div className='bg-white w-fit h-fit border border-black rounded-full m-0 px-[13px] mt-[3%] ease-in-out duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:cursor-pointer'>
        <div className='text-4xl text-black translate-y-[-5px] group-hover:text-white ease-in-out duration-300'>-</div>
      </div>
      </div>
    </div>
    </div>
</div>

  
{/* item> */}
<div className='border border-gray-200 shadow-xl rounded-md max-w-[30%] h-fit group-hover:translate-y-10px group-hover:cursor-pointer ease-in-out duraiton-300'>
  <div className='h-[40vh] w-[100%] overflow-hidden'> <img className='h-[100%] w-[100%] object-cover' src={justin3}></img> </div>
  <div className ='px-[7%] pt-[5%] pb-[3%]'>
    <h1 className='text-2xl'> Justin Cheung</h1>
    <h2 className='text-sm text-gray-600'> Male, 6ft, Straight</h2>
    <h3 className='mt-[5%]'>Hello! I'm Justin, a passionate product manager at Second Savor, where I bring innovative ideas to life and ensure our products make a positive impact. I thrive on creating solutions that matter, and I take pride in my work. Beyond my professional life, I'm an avid cook who loves experimenting with new recipes and sharing delicious meals with friends and family.</h3>
      
    <h3 className='mt-[5%] text-sm text-red-500 hover:cursor-pointer hover:text-red-800 ease-in-out duration-300'> Report User</h3>

    <div className='flex gap-4 mt-[5%]'>
      <div className='group'>
      <div className='bg-black w-fit h-fit border-black border rounded-full m-0 px-[8px] mt-[3%] ease-in-out duration-300 group-hover:bg-white group-hover:color-black group-hover:border-black group-hover:cursor-pointer'>
        <div className='text-4xl text-white translate-y-[-5px] group-hover:text-black ease-in-out duration-300'>+</div>
      </div>
      </div>

      <div className='group'>
      <div className='bg-white w-fit h-fit border border-black rounded-full m-0 px-[13px] mt-[3%] ease-in-out duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:cursor-pointer'>
        <div className='text-4xl text-black translate-y-[-5px] group-hover:text-white ease-in-out duration-300'>-</div>
      </div>
      </div>
    </div>
    </div>
</div>
</div>

<div className='text-left border-2 border-gray-200 rounded-md shadow-xl w-[92%] bg-white m-auto px-[2%] py-[2%] mb-[5%]'>
<h1 className='text-2xl '> Not Satisfied with what your seeing?</h1>
<h3 className='mt-[5px] text-sm text-blue-500 hover:cursor-pointer hover:text-blue-800 ease-in-out duration-300'> Go Back</h3>
</div>


    </div>
  )
}

export default Home
