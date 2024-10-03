import React from 'react'
import justin from '..//assets/images/justin.png'

function test() {
  return (
    <div>
      
    <div className='h-fit max-w-[100lvw] border-2 border-black m-[10%]'>

    <div className='border-2 border-black h-fit w-[100%] p-[2%]'>
    <li> An in-text link</li>
    <a href='https://www.google.com'> Google </a>
    </div>

    <div className='border-2 border-black h-fit w-[100%] 1 p-[2%]'>
      <li>A text input field and a label</li>
      <label> Name: </label>
      <div className='border-2 border-black w-fit'> <input type='text' /> </div>
      </div>

      <div className='border-2 border-black h-fit w-[100%] 1 p-[2%]'>
      <li>An image that links to another URL</li>
      <a href='https://www.google.com'><img src={justin} /></a>
      </div>


      <div className='border-2 border-black h-fit w-[100%] 1 p-[2%]'>
      <li>Four levels of heading </li>
      <h4 className=' text-6xl'> Heading </h4>
      <h1> Heading </h1>
      <h2> Heading </h2>
      <h3> Heading </h3>
      </div>

            <div className='border-2 border-black h-fit w-[100%] 1 p-[2%]'>
      <li>A Paragraph</li>
      <p id="small" className='text-md'>Paragraph generator here</p>
      </div>
      
    </div>

    </div>
  )
}

export default test
