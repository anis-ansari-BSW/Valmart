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

function FrontContent() {
  return (
    <div className='container mx-auto px-10'>
      <div className="grid grid-cols-4 grid-flow-row grid-rows-3 auto-rows-max gap-7 mt-6">
        {/* left section */}
        <div className='row-start-1 row-end-4'>
          <div className='relative cursor-pointer'>
            <div className='rounded-lg'>
              <img src={project1} alt="project image" className='rounded-lg' />
              <div className='absolute top-3 left-3'>
                <h2 className='font-bold text-2xl'>Feel-good food</h2>
                <p className='underline'>Shop grocery</p>
              </div>
            </div>
          </div>

          <div className='relative cursor-pointer mt-5'>
            <div className='rounded-lg'>
              <img src={project5} alt="project image" className='rounded-lg w-full' />
              <div className='absolute top-3 left-3'>
                <h2 className='font-bold text-2xl'>Stay on top of what’s trending</h2>
                <p className='underline'>Shop grocery</p>
              </div>
            </div>
          </div>

          <div className='relative cursor-pointer mt-5'>
            <div className='rounded-lg'>
              <img src={project6} alt="project image" className='rounded-lg w-full' />
              <div className='absolute top-3 left-3'>
                <h2 className='font-bold text-2xl text-white'>Gear up & get fit</h2>
                <p className='underline  text-white'>Shop grocery</p>
              </div>
            </div>
          </div>
        </div>

        {/* middel section */}
        <div className='col-span-2 row-start-1 row-end-4'>
          <div className='relative cursor-pointer'>
            <div className='rounded-lg'>
              <img src={project3} alt="project image" className='rounded-lg w-full' />
              <div className='absolute top-3 left-3'>
                <p className=''>Cursh your resolutions</p>
                <h2 className='font-bold text-5xl'>New year inspo</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            <div className='relative cursor-pointer mt-5'>
              <div className='rounded-lg'>
                <img src={project8} alt="project image" className='rounded-lg h-60' />
                <div className='absolute top-3 left-3'>
                  <h2 className='font-bold text-2xl'>Gear up & get fit</h2>
                  <p className='underline'>Shop storage</p>
                </div>
              </div>
            </div>
            <div className='relative cursor-pointer mt-5'>
              <div className='rounded-lg'>
                <img src={project9} alt="project image" className='rounded-lg h-60' />
                <div className='absolute top-3 left-3'>
                <h2 className='font-bold text-2xl'>Up to 50% off</h2>
                <p className='underline'>Shop now</p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative cursor-pointer mt-5'>
            <div className='rounded-lg'>
              <img src={project7} alt="project image" className='rounded-lg w-full' />
              <div className='absolute top-3 left-3'>
                <h2 className='text-2xl'>Save time with free delivery from your</h2>
                <p className=''>One free trial per member. Term apply</p>

              </div>

            </div>
          </div>
        </div>

        {/* right section */}
        <div className='row-start-1 row-end-4'>
          <div className='relative cursor-pointer'>
            <div className='rounded-lg'>
              <img src={project4} alt="project image" className='rounded-lg' />
              <div className='absolute top-3 left-3'>
                <h2 className='font-bold text-2xl'>Enjoy non-alcoholic drinks</h2>
                <p className='underline'>Shop now</p>
              </div>
            </div>
          </div>

          <div className='relative cursor-pointer mt-5'>
            <div className='rounded-lg'>
              <img src={project11} alt="project image" className='rounded-lg' />
              <div className='absolute top-3 left-3'>
                <h2 className='font-bold text-2xl'>Big goals. Even bigger saving</h2>
                <p className='underline'>Shop all</p>
              </div>
            </div>
          </div>

          <div className='relative cursor-pointer mt-5'>
            <div className='rounded-lg'>
              <img src={project10} alt="project image" className='rounded-lg' />
              <div className='absolute top-3 left-3'>
                <h2 className='font-bold text-2xl'>Enter your self-care era</h2>
                <p className='underline'>Shop now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FrontContent