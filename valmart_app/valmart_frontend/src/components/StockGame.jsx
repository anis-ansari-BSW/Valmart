import React from 'react'
import project1 from '../assets/image/project/project1.jpg'
import project2 from '../assets/image/project/project2.jpg'
import project3 from '../assets/image/project/project3.jpg'
import project4 from '../assets/image/project/project4.jpg'
import project5 from '../assets/image/project/project5.jpg'
import project6 from '../assets/image/project/project6.jpg'
import project7 from '../assets/image/project/project7.jpg'
import project8 from '../assets/image/project/project8.jpg'
import project9 from '../assets/image/project/project9.jpg'
import project10 from '../assets/image/project/project10.jpg'
import project11 from '../assets/image/project/project11.jpg'
import bidsale from '../assets/image/project/bidsale.jpg'
import project13 from '../assets/image/project/project13.jpg'
import project14 from '../assets/image/project/project14.jpg'

function StockGame() {
    return (
        <div className='container mx-auto px-10 mt-5'>
            <div className='grid grid-cols-4 gap-7'>
                <div className='row-span-2 col-span-2 relative'>
                    <img src={project3} alt="" className='' />
                    <div className='absolute top-6 left-5'>
                        <p className='font-semibold text-blue-900'>Stock up, game on</p>
                        <p className='text-4xl font-bold text-blue-900'>Win the watch party</p>
                        <button className='bg-white px-4 py-1 border-gray-600 border rounded-full mt-3 hover:border-2 hover:border-black'>Shop all</button>
                    </div>
                </div>

                <div className='grid-cols-2 gap-7'>
                    <div className='col-span-2'>
                        <img src={project4} alt="" className='' />

                    </div>
                    <div className='col-span-2 flex gap-7 mt-6'>
                        <div className=''>
                            <img src={project13} alt="" className='' />
                        </div>
                        <div className=''>
                            <img src={project14} alt="" className='' />
                        </div>
                    </div>

                </div>

                <div className='row-span-2 col-auto'>
                    <img src={project5} alt="" className='' />
                </div>
            </div>
        </div>
    )
}

export default StockGame