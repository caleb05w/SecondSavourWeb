import React from 'react'
import CitrusCandie from '../assets/images/CirtusCandie.png'
import Container from '../Components/Container.js'
import Segment from  '../Components/Segment.js'
import Boothing from '../assets/images/boothing.png'

function Shop() {
return (
    <div className='w-[100%] bg-[#FEF7E6] flex justify-center'>
                    <div className='flex flex-col gap-[5lvh] min-h-fit border-orange-400 border-5 text-center pt-[13%] w-[90%]'>
                    
                            <div className='container'>
                                    <h1> OUR PRODUCTS </h1>
                                    <h3 className='mt-[1%]'> Filler filler body </h3>
                            </div>
                        <div className='flex gap-[1%]'>
                            <Container Title='Citrus Candies' Description='Our delicious citrus candies are made from the finest ingredients. They are perfect for any occasion and are sure to be a hit with your friends and family.' Image={CitrusCandie} BGColor={"#E7D9BF"} />
                            <Container Title='Coming Soon' Description='Stay tuned! We’re working hard to expand our product line outside of Citrus Treats.y.' Image={CitrusCandie} BGColor={"#0D6A3D"} />
                        </div>

                        <Segment
                        Title = {"In Person Sales"}
                        Header = {"Visit Us In Person"}
                        Text = {"We create our product using eco-friendly resources, offering sustainable food products."}
                        Image = {Boothing}
                         />
                    </div>
        
    </div>
)
}

export default Shop
