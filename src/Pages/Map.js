import React from 'react'
import Segment from '../Components/Segment.js'
import Boothing from '../assets/images/boothing.png'

function Map() {
return (
    <div className='w-[100%] bg-[#FEF7E6] flex justify-center'>
            <div className='flex flex-col gap-[5lvh] min-h-fit border-orange-400 border-5 text-center pt-[13%] w-[90%]'>
                            
                    <div className='container'>
                            <h1> Where to Find Us </h1>
                            <h3 className='mt-[1%]'> Visit us in person </h3>
                    </div>

                    <div className='border-2 border-black w-[100%] h-auto flex flex-cols justify-center'>
                            <iframe className='w-[100%]' src="https://www.google.com/maps/d/u/0/embed?mid=1m7igr-l7agteVpDkz_xcdeTAP2Z3Yq0&ehbc=2E312F" width="640" height="480"></iframe>             
                    </div>

                    <Segment
                    header = {"In Person Sales"}
                    Title = {"Visit Us In Person"}
                    Text = {"We create our product using eco-friendly resources, offering sustainable food products."}
                    Image = {Boothing}
                    />
            </div>
        
    </div>
)
}

export default Map
