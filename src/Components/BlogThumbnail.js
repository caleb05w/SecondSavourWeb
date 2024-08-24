import React from 'react'

function BlogThumbnail({Category, ReadTime, Title, Description, Author, Date, image}) {
  return (

<div className='max-w-[40%] h-[80%] rounded-lg bg-white'>
    <div className=' w-full h-[33vh] overflow-hidden rounded-lg object-cover'>
        <img className=' object-cover w-[100%] h-[100%]' src={image} />
    </div>
    <div className='p-[3%]'>

        <div className='flex gap-[3%] mt-[5%]'>
            <h3> {Category}</h3>
            <h3 className='text-gray-500'> {ReadTime} </h3>
        </div>
        <h1 className='mt-[3%]'> {Title}</h1>
        <h3 className='mt-[3%]'> {Description} </h3>
        <div className='flex gap-[3%] mt-[8%] pb-[3%] text-gray-500'>
            <h3> {Author}</h3>
            <h3> {Date} </h3>
        </div>
{/* 
        <div className='mt-[2%] rounded-full py-[1%] px-[4%] w-fit border-2 border-black'>
                <h2> Read Here </h2>
            </div> */}

    </div>
    </div>

  )
}

export default BlogThumbnail
