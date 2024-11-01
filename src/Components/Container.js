import React from 'react'
import Button from './Button.js'

function Container({Title, Description, Image, BGColor, ButtonText, clickTo}) {
  return (
    <div className='min-h-fit flex flex-col justify-between  gap-[3vh] rounded-[1rem] p-[2rem] lg:w-[50%] text-left relative' style={{backgroundColor: BGColor }}>
    <h2> {Title} </h2>
    <p> {Description} </p>
        <div className='w-[100%] justify-center flex'>
            <img src={Image} alt='Our Delicious Product Citrus Candies'></img>
        </div>
        
      <div className='relative bottom-0'>
        <div className='absolute bottom-0 min-w-[100%] '>
          <Button 
          text= {ButtonText}
          clickTo={clickTo} />
          </div>
      </div>
</div>
  )
}

export default Container
