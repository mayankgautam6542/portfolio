import React from 'react'

const About = () => {
    
  return (
    <div name="about" className='w-full h-90 bg-gradient-to-b from-gray-800 to-black text-white pt-10 pb-40'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 '>About</p>
            </div>
            <p className='text-xl'>
            Hey there! I'm Mayank Gautam, a recent graduate in Software Engineering from Delhi Technological University (DTU). My journey into
             the world of development commenced during my academic journey, and I've found a genuine interest in this field. Specifically, 
             my interests lie in crafting engaging and user-friendly web applications, with a primary focus on front-end development. 
             Additionally, I have hands-on experience with backend technologies like NodeJS, ExpressJS, and MongoDB, allowing me to build 
             robust and scalable server-side applications. My passion for creating efficient and scalable web solutions drives me to stay 
             updated with the latest industry trends and best practices. 
             </p>
             <br />
             <p className='text-xl'>
             Other than development I've a very strong problem solving skills and has solved over 500+ problems on different platforms 
             like Leetcode, CodeChef, Codeforces. I've discovered a interest in machine learning as well and I'm diving into that field too. 

            </p> 
            <br />
            <p className='text-xl'>
            I am enthusiastic about continually expanding my expertise, embracing new technologies, and tackling challenging projects 
            to further refine my skills. I am eager to apply my knowledge in real-world scenarios and contribute to the ever-evolving
            field of software engineering.
            My goal is to contribute to impactful software solutions and continuously grow as a developer.

            </p>
        </div>
    </div>
  )
}

export default About
