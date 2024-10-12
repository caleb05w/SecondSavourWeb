import React from 'react'
import Button from './Button.js'

function Container({Title, Description, Image, BGColor}) {
  return (
    <div className='min-h-fit flex flex-col gap-[3vh] rounded-[1rem] p-[2rem] w-[50%] text-left relative' style={{backgroundColor: BGColor }}>
    <h2> {Title} </h2>
    <p> {Description} </p>
        <div className='w-[100%] justify-center flex'>
            <img src={Image} alt='Our Delicious Product Citrus Candies'></img>
        </div>
    <div className='absolute bottom-10 w-[90%] m-auto'>
        <Button text='View Product' />
    </div>
</div>
  )
}

export default Container
