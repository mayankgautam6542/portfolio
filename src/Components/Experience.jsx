import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import reactImage from '../assets/reactImage.png'
import bootstrap from '../assets/bootstrap.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import nodejs from '../assets/node.png'
import github from '../assets/github.png'
import cpp from '../assets/cpp.png'
import mongodb from '../assets/mongodb.png'
import express from '../assets/express.png'
import python from '../assets/python.png'

const Experience = () => {

    const technologies = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            
            id:5,
            src: bootstrap,
            title: 'BootStrap',
            style: 'shadow-purple-400'
        },
        {
            id:6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:7,
            src: mongodb,
            title: 'Mongo-DB',
            style: 'shadow-green-500/50'
        },
        {
            
            id:8,
            src: nodejs,
            title: 'Node JS',
            style: 'shadow-green-200'
        },
        {
            id:9,
            src: express,
            title: 'express',
            style: 'shadow-white'
        },
        {
            id:10,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-300'
        },
        {
            id:11,
            src: github,
            title: 'GitHub',
            style: 'shadow-white'
        },
        {
            id:12,
            src: python,
            title: 'python',
            style: 'shadow-blue-300'
        },
        
    ]

  return (
    <div name="experience" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black pt-80 pb-10 '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white mt-20'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-cyan-500 p-1 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    technologies.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience