import React from 'react';
import '../output.css';
import '../input.css'; // Tailwind stylesheet
import lemonMan from '../assets/lemon_man.png';
import SmallSegment from '../Components/SmallSegment.js';
import Boxes from '../assets/images/boxes.png'
import Boothing from '../assets/images/boothing.png'
import New1 from '../assets/images/NewSticker.png'
import Packages from '../assets/images/Group742.png'
import Button from '../Components/Button.js'

function Home() {
  return (
    <div className='w-100% bg-[#FEF7E6] flex justify-center'>

      <div className='flex flex-col gap-[10vh] min-h-fit pt-[10%] w-[90%]'>

      {/* Header Section */}
      <div className="p-[2%]">
        <h1 className='text-center font-bold'>SECOND SAVOUR</h1>
        <h4 className='text-center mt-[1%]'>Body copy, and importing tag linea</h4>
      </div>

      {/* Citrus Candies Section */}
      <div className='mt-[2%] p-[2%] bg-green-800 flex border-2 rounded-2xl'>
        <div className='w-[40%]'>
          
          <img src={New1}/>

          <h1 className='mt-[2%] font-bold text-white'>Citrus Candies</h1>
          <h4 className='mt-[2%] text-2xl font-bold text-white'>7.99 Per Package</h4>
          <p className='mt-[2%] text-white'>
            Nutritious, vitamin-filled, citrus delicacies hand-made from repurposed juiced oranges. Made to enjoy in class, on a drive, during study sessions - basically anywhere!
          </p>
          
          <div className='mt-[4%]'>
          <Button
              text={"Check it out!"}
          />
          </div>
        </div>

        <div className='w-[60%] flex justify-center'>
          <img src={Packages} alt="Packages" className='max-w-full' />
        </div>
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

      <div className='flex flex-wrap mt-[2%] justify-between gap-[1%]'>
                                
                                <div className='w-full md:w-[48%] h-auto mb-8'>
                                <SmallSegment
                                Title = {"Order Online"}
                                Text = {"At Second Savour, we're expanding our sustainability initiatives to engage people outside of our communities.  Join us in making a positive impact on our planet!"}
                                ButtonText = {"Browse Products"}
                                Image = {Boxes}
                                />
                                </div>

                                <div className='max-w-[50%] h-[50%]'>
                                <SmallSegment
                                Title = {"Visit our In Person Sales"}
                                Text = {"We create our product using eco-friendly resources, offering sustainable food products."}
                                ButtonText = {"View Locations"}
                                Image 
                                = {Boothing}
                                 />
                                 </div>
                                </div>
      </div>
    </div>
  );
}

export default Home;
