import React from 'react'
import profile from "../assets/umair-pic.png"

const About = () => {
  return (
    <div>
      <div className='flex justify-around items-center flex-col lg:flex-row'>
        <img src={profile} alt="Profile" className='w-[99vw] lg:w-[40%]' />
        <div className='w-[99vw] lg:w-[40%]'>
          <h1 className='text-[#915eff] text-3xl text-center'>About Me</h1>
          <p className='text-white text-xl text-center pt-3'>My name is Syed Umair. Currently a student of Bachelor of Engineering in Civil Engineering.
            <br />
            A highly motivated civil engineering student passionate about AutoCAD, Revit, ETABS, SAP2000, and SketchUp. Sound knowledge of structural and architectural designing, quantity, and cost estimation, and soil mechanics.<br />
            Aim to become the best Civil Engineer. <br />
            Open For New Opportunities.</p>
        </div>
      </div>
    </div>
  )
}

export default About
