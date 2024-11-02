import React from 'react'
import '../output.css';
import '../input.css'; // Tailwind stylesheet

export default function Impacts() {
  return (
    <div>
        <div className='w-100% bg-[#FEF7E6] flex justify-center'>
            <div className='flex flex-col gap-[10vh] min-h-fit pt-[10%] w-[90%]'>
                {/* Header Section */}
                <div className="p-[2%]">
                <h1 className='text-center font-bold'>CURRENT IMPACTS</h1>
                <h4 className='text-center mt-[1%]'>Here's how we're changing the community</h4>
                </div>
            
                <div className='mt-[5%] p-[3%] rounded-lg border-2 border-black'>
                    <div>
                        <h1>THIS YEAR, AT A GLANCE</h1>
                        <h5 className='mt-[1%]'>Shoot for the moon. Even if you miss, you'll land among the stars</h5>
                    </div>
                          {/* Stats Section */}
      <div className='mt-[2%] flex justify-between'>
        <div className='w-[30%] p-4 border-2'>
          <h2 className='text-8xl font-bold'>44 kg+</h2>
          <p>Of surplus and imperfect produce saved from waste last month</p>
        </div>
        <div className='w-[30%] p-4 border-2'>
          <h2 className='text-8xl font-bold'>100+</h2>
          <p>Packages donated last year to raise awareness</p>
        </div>
        <div className='w-[30%] p-4 border-2'>
          <h2 className='text-8xl font-bold'>200+</h2>
          <p>Packages donated in the last year to raise awareness</p>
        </div>
      </div>
                </div>

            </div>



        </div>      
    </div>
  )
}

