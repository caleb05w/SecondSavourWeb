import React from 'react'
import '../output.css'
import '../input.css' //<-- Tailwind stylesheet
import lemonMan from '../assets/lemon_man.png'
import gloriousPM from '../assets/images/gloriousPM.jpg'
import justin from '../assets/images/justin.png'
import justin2 from '../assets/images/justin2.png'
import justin3 from '../assets/images/justin3.png'


function Home() {
  return (
    <div className='bg-yellow-100'> 

      <div className="border-2 border-black w-[80%] m-auto">
        <h1 className='text-center'>Second Savour</h1>
        <h4 className='text-center'>Body copy, and importing tag line</h4>
      </div>

      <div className='mt-[4%] w-[80%] p-[2%] bg-green-800 text-white flex m-auto border-2 rounded-2xl'>
        <div className='w-[40%]'>
          <h2>New!(Img)</h2>
          <h1 className='mt-[5%] font-bold'>Citrus Candies</h1>
          <h4 className='mt-[3%] font-bold'>7.99 Per Package</h4>
          <h4 className='mt-[3%] font-bold'>Nutritious vitamin-filled, citrus delicacies hand-made from repurposed juiced oranges. Made to enjoy in class, on a drive, during study sessions, basically anywhere!</h4>

          <div className='mt-[5%] border-2 border-black w-[30%] h-[15%] rounded-md'>Check it out! --{'>'}</div>
        </div>
        <div className='w-[60%}'>
          <img src={lemonMan}/>
        </div>
      </div>

      <div className='mt-[2%] w-[80%] m-auto flex'>
        
        <div className='w-[33%] p-[3%] border-2'>
          <h1>44 kg+</h1>
          <h4>Of surplus and imperfect produce from waste reduced in the last month</h4>
        </div>

        <div className='w-[33%] p-[3%] border-2'>
          <h1>44 kg+</h1>
          <h4>Packages  donated in the last year to raise awareness</h4>
        </div>

        <div className='w-[33%] p-[3%] border-2'>
          <h1>44 kg+</h1>
          <h4>Packages donated in the last year to raise awareness</h4>
        </div>
      </div>

      <div className='mt-[2%] w-[80%] p-[2%] m-auto flex gap-x-[2%] border-2'>
        <div className='border-2'>
          <div className='w-[90%] border-2 border-black'>
            <h1>In Person</h1>
            <h4>We create our products using eco-friendly resources, offering sustainble food products</h4>
          </div>
        </div>

        <div className='border-2'>
          <div className='w-[90%] border-2 border-black'>
            <h1>Shop Online</h1>
            <h4>We create our products using eco-friendly resources, offering sustainable food products.</h4>
          </div>
        </div>
      </div>

    </div>
)
}

export default Home
