import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[90%] md:w-[85%] mx-auto px-2 mb-5'>
          <h4 className='text-4xl mb-5 font-semibold'>Contact</h4>
          <a href="https://github.com/kryptcode" target="_blank" className='text-3xl underline'>GitHub</a>
          <div className='mt-2'>
            <a href="mailto: adeyombokehd@gmail.com" target="_blank" rel='noreferrer' className='text-3xl underline'>
              Email
            </a>
          </div>
    </footer>
  )
}

export default Footer