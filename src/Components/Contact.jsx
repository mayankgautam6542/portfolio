import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-120vh bg-gradient-to-b from-black to-gray-800 text-white pt-80'>
        <div className='flex flex-col max-w-screen-lg mx-auto justify-center h-full mt-20'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-cyan-500 inline p-1'>Contact</p>
                <p className='py-6'>Submit the Form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/95d5cd5a-78b9-4b87-9ce4-6d7e61fdc4e3" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required />
                    <input type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white' required />
                    <textarea name="message" rows="8" className='p-2 bg-transparent border-2 rounded-md text-white' placeholder='Enter your message'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact