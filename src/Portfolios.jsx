import React from 'react'
import face from '../src/assets/face.png'
import virtualp from '../src/assets/virtualp.jpg'
import memories from '../src/assets/memories.jpeg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: face,
            demo: 'https://github.com/mayankgautam6542/Face-Recognition-and-Live-Attendance',
            code: 'https://github.com/mayankgautam6542/Face-Recognition-and-Live-Attendance'
        },
        {
            id: 2,
            src: virtualp,
            demo: 'https://github.com/mayankgautam6542/Virtual-Paint',
            code: 'https://github.com/mayankgautam6542/Virtual-Paint'
        },
        {
            id: 3,
            src: memories,
            demo: 'https://github.com/mayankgautam6542/Memories',
            code: 'https://github.com/mayankgautam6542/Memories'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-60 pb-80'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 p-1'>Portfolio</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            {/* Structure for Card. */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id,src,demo,code})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                        <a href={demo}  target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-110'>Demo</button></a>
                        <a href={code} target='_blank' rel='noreferrer'><button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-110'>Code</button></a>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div> 
  )
}

export default Portfolio