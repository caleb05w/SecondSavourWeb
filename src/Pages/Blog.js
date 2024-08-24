import React from 'react'
import lemon from '../assets/lemon_man.png'
import test from '../assets/images/blog_Test.png'
import test2 from '../assets/images/b2.png'
import test3 from '../assets/images/b3.png'

import BlogThumbnail from '../Components/BlogThumbnail'

function Blog() {
  return (
    <div className='bg-[#FFF5DB] min-w-[lvw] pb-[5%] pt-[2%]'>
      
      {/* /*Featured Article / */}
      <div className=' h-[45vh] overflow-hidden rounded-xl bg-[#FFE84D] p-[3%] w-[90%] mx-[5%] pb-[2%] flex'>

        <div className=''>
            <div className='flex gap-[5%]'><h3> Featured Article </h3>
            <h3> 8 Minute Read</h3>
            </div>

            <h1 className='mt-[2%]'> Citrus Candies </h1>
            <h3 className='mt-[2%] w-[80%]'>Nutritious, vitamin-filled, citrus delicacies hand-made from repurposed juiced oranges. Made to enjoy in class, on a drive, during study sessions, basically anywhere!</h3>

            <div className='mt-[12%] rounded-full py-[1%] px-[3%] w-fit border border-black'>
                <h2> Read Here </h2>
            </div>
        </div>

        <div className='w-[80%]'>
            <img src={lemon} />
        </div>

    </div>

    {/* Containers */}
    
    <div className='mx-[5%] flex gap-[1%] mt-[1%]'>
        <BlogThumbnail Category='Category of Article' ReadTime='8 Minute Read' Title='How we make our Products' Description='How we make our candies and deliver them to your door. Two Sentence description of the contents of this article, and why it is exciting.' Author='Author' Date='Date' image={test} />
        <BlogThumbnail Category='Category of Article' ReadTime='8 Minute Read' Title='How we make our Products' Description='How we make our candies and deliver them to your door. Two Sentence description of the contents of this article, and why it is exciting.' Author='Author' Date='Date' image={test2} />
        <BlogThumbnail Category='Category of Article' ReadTime='8 Minute Read' Title='How we make our Products' Description='How we make our candies and deliver them to your door. Two Sentence description of the contents of this article, and why it is exciting.' Author='Author' Date='Date' image={test3} />
    </div>

    </div>
  )
}

export default Blog
