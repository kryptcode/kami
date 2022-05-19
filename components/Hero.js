import React from 'react'

const Hero = () => {
  return (
    <div className='w-[90%] md:w-[85%] mx-auto flex items-center h-[100vh]'>
        <div>
            <h5 className='text-gray-200 text-xl mb-3'>
              Hello! I'm
            </h5>
            <h2 className='text-6xl font-semibold mb-3 tracking-widest'>
              Koye,
            </h2>
            <h6 className='text-4xl mb-5 text-gray-300'>
              and I develop web apps.
            </h6>
            <p className='text-xl text-gray-300'>
              I'm a self-taught web developer based in Abuja, Nigeria.
            </p>
        </div>
    </div>
  )
}

export default Hero