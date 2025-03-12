import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", fontSize: "36px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
        />
    );
}

function FreshFree(props) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='container mx-auto px-10 mt-5'>
            <h1 className={'text-2xl font-bold'}>{props.title}</h1>

            {/* slider start */}
            <div className='grid grid-cols-2 gap-8'>
                <div className=''>
                    {/* page title */}
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Fresh from Free Assembly</h1>
                        <p className='underline'>View all</p>
                    </div>

                    <div className="slider-container my-8">
                        <Slider {...settings}>
                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project1} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                          {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project2} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project3} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project4} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project5} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project6} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project7} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project8} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                            <div className='px-2 cursor-pointer relative'>
                                <div>
                                    <img src={project9} alt='image' className='w-full h-40' />
                                </div>
                                <div>
                                    <h2 className='my-1'>
                                        <span className='text-green-800 text-lg font-bold'>Now $12.99 </span>
                                         {/* <span className='pl-5 text-sm text-gray-600 line-through'>$24.99</span> */}
                                    </h2>
                                    <p className='text-gray-600 text-wrap text-sm'>Puresoak Bath Himalayan Salt Body Scrub & Free Scrub</p>
                                    <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                                </div>
                                <div className='absolute right-8 top-3'>
                                    <FaRegHeart className='text-2xl' />
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
                <div>
                <img src={bidsale} alt='image' className='w-full' />
                </div>
            </div>


        </div>

    )
}

export default FreshFree