import React from 'react'
import bitmoji from "../assets/bitmoji.png"

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-around md:items-center home flex-col lg:flex-row mt-20 gap-y-32'>
      <div className='w-[100vw] lg:w-1/3 px-8 no-scrollbar flex flex-col justify-center'>
        <h1 className='text-white text-3xl no-scrollbar'>Hi,</h1>
        <h1 className='text-white text-3xl no-scrollbar'>I am Syed Umair</h1>
        <h1 className='text-white text-3xl no-scrollbar'>A Civil Engineering Student</h1>
        <h2>I am Civil Engineering</h2>
        <button>
          <span>About Me</span>
        </button>
      </div>
      <div className='w-[100vw] lg:w-1/3 h-96 flex justify-center items-center'>
        <img src={bitmoji} alt="Animated Picture" className='w-[90%]'/>
      </div>
    </div>
  )
}

export default Home
