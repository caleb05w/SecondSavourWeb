import React from 'react'
import CitrusCandie from '../assets/images/CitrusCandie.png'
import Container from '../Components/Container.js'
import Segment from  '../Components/Segment.js'
import Boothing from '../assets/images/boothing.png'
import Boxes from '../assets/images/boxes.png'

function Shop() {
return (
    <div className='w-[100%] bg-[#FEF7E6] flex justify-center'>
                    <div className='flex flex-col gap-[10vh] min-h-fit border-orange-400 border-5 text-center pt-[9%] w-[90%]'>
                    
                            <div className=''>
                                    <h1> OUR PRODUCTS </h1>
                                    <h3 className='mt-[1%]'> Filler filler body </h3>
                            </div>
                        <div className='flex gap-[1%]'>
                            <Container Title='Citrus Candies' Description='Our delicious citrus candies are made from the finest ingredients. They are perfect for any occasion and are sure to be a hit with your friends and family.' Image={CitrusCandie} BGColor={"#E7D9BF" }ButtonText={"View Product"} clickTo={"/Checkout"} />
                            <Container Title='Coming Soon' Description='Stay tuned! We’re working hard to expand our product line outside of Citrus Treats.' Image={Boxes} BGColor={"#0D6A3D"} ButtonText={"Stay Updated!"} clickTo={"/shop"} />
                        </div>

                        <Segment
                        Title = {"Visit our In Person Sales"}
                        Header = {"Visit Us In Person"}
                        Text = {"We create our product using eco-friendly resources, offering sustainable food products."}
                        ButtonText = {"View Locations"}
                        Image = {Boothing}
                        clickTo={'/map'}
                         />
                    </div>
        
    </div>
)
}

export default Shop
