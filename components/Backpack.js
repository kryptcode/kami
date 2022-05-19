import React from 'react'

const Backpack = () => {
  return (
    <div className='w-[90%] md:w-[85%] mx-auto mb-28'>
        <h4 className='text-4xl font-semibold mb-3'>My Backpack</h4>
        <p className='text-xl text-gray-300'>
          You can find the list of my top skills below. I'm also open to learn more frontend and backend related frameworks, libraries, languages, etc!
        </p>
        <div className='flex flex-col sm:flex-row space-y-4 md:space-y-0 justify-between mt-12'>
            <div className="space-y-2">
                <h2 className='text-3xl font-semibold'>
                    Frontend
                </h2>
                <p className='text-gray-300'>HTML & CSS</p>
                <p className='text-gray-300'>Javascript</p>
                <p className='text-gray-300'>React & Next.js</p>
                <p className='text-gray-300'>TailwindCSS</p>
                <p className='text-gray-300'>Styled Components</p>
                <p className='text-gray-300'>Recoil</p>
                <p className='text-gray-300'>Framer-motion</p>
            </div>
            <div className="space-y-2">
                <h2 className='text-3xl font-semibold'>
                    Backend
                </h2>
                <p className='text-gray-300'>REST APIs</p>
                <p className='text-gray-300'>Firebase</p>
                <p className='text-gray-300'>Authentication</p>
            </div>
            <div className="space-y-2">
                <h2 className='text-3xl font-semibold'>
                    Others
                </h2>
                <p className='text-gray-300'>Git & Github</p>
                <p className='text-gray-300'>Wallet Integration</p>
            </div>
        </div>
    </div>
  )
}

export default Backpack