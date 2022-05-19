import React from 'react'
import data from '../projects.json' 
import Card from './Card'

const Projects = () => {
    
  return (
    <div className='w-[90%] md:w-[85%] mx-auto py-4 mb-12 '>
        <h2 className='text-4xl font-semibold mb-3 '>
            Featured Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
            {
                data.map(item => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    </div>
  )
}

export default Projects

// export async function getStaticProps(ctx) {
//     const projects = await fetch(data).then(res => res.json())

//     re 
// }