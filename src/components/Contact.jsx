import React from 'react'
import fb from "../assets/facebook.png"
import yt from "../assets/youtube.png"
import em from "../assets/email.png"
import upwork from "../assets/upwork.svg"

const Contact = () => {
    return (
        <div id='Contact'>
            <div className='text-white flex justify-center items-center flex-col'>
                <h1 className='text-3xl'>Contact Me</h1>
                <p className='text-center'>Here are the links where you can connect with me</p>
                <div className='flex flex-row gap-x-4 py-8'>
                    <button>
                        <a href="https://www.facebook.com/profile.php?id=100011469683411&mibextid=ZbWKwL" target='_blank'>
                            <img src={fb} alt="" />
                        </a>
                    </button>
                    <button>
                        <a href="https://www.youtube.com/@ConstructiveInsight6061" target='_blank'>
                            <img src={yt} alt="" />
                        </a>
                    </button>
                    <button>
                        <a href="mailto:umairaamir9091@gmail.com">
                            <img src={em} alt="" />
                        </a>
                    </button>
                    <button>
                        <a href="https://www.upwork.com/freelancers/~019bde65c3d23f5d20" target='_blank'>
                            <img src={upwork} alt="" style={{height:"32px", width:"32px"}}/>
                        </a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Contact
