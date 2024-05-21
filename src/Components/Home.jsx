import React from 'react'
import heroImage from '../assets/heroImage.jpg'

import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a <span className='text-cyan-500'>Full Stack</span> Developer</h2>
          <p className="py-4 text-gray-500 max-w-md">
          I really enjoy building Web-Applications that are easy for people to use and and have responsive UI design for enhanced accessibility
           and user engagement using technologies like ReactJS, Express, NodeJs integrating it with MongoDB</p>
            <div>
              <Link to='portfolio' smooth duration={500}>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 cursor-pointer">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300 pl-2"><HiOutlineArrowNarrowRight/></span>
                </button>
              </Link>
              
            </div>
        </div>
        <div>
          <img className="md:w-96 md:h-72 rounded-2xl h-72 w-72" src={heroImage} alt="my Profile" />
        </div>
      </div>
    </div>
  )
}

export default Home




