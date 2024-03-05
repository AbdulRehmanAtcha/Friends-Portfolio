import React from 'react'
import { ReactTyped } from 'react-typed'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center home'>
      <div className='flex flex-col'>
        <ReactTyped
          strings={[
            "Hi. 👋",
          ]}
          typeSpeed={40}
          showCursor={false}
          className='text-white text-2xl text-center'
        >
        </ReactTyped>
        <ReactTyped
          strings={[
            "I am Syed Umair.",
          ]}
          startDelay={400}
          typeSpeed={40}
          showCursor={false}
          className='text-white text-2xl'
        >
        </ReactTyped>
        <button>
          <span>About Me</span>
        </button>

      </div>
    </div>
  )
}

export default Home
