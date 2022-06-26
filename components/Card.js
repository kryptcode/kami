import React from 'react'

const Card = ({ item }) => {
    const { name, code_url, live_project, img, technologies } = item

  return (
    <div className='bg-white/5 rounded-md pb-8 cursor-pointer hover:-translate-y-2 transition duration-200'>
      <a href={live_project} target="_blank" rel="noreferrer">
        <div className='pb-3'>
            <img src={img} alt={name} className='w-full rounded-t-md' />
        </div>
        <div className='ml-4'>
          <h4 className='mb-2 text-2xl font-semibold'>
            {name}
          </h4>
        </div>
        </a>
    </div>
  )
}

export default Card
