import React from 'react'
import Home from './Home'
import { Divider } from 'antd'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Header from './Header'

const Packet = () => {
    return (
        <div>
            <Header />
            <Home />
            <Divider style={{ backgroundColor: "white" }} />
            <About />
            <Divider style={{ backgroundColor: "white" }} />
            <Projects />
            <Divider style={{ backgroundColor: "white" }} />
            <Contact />
        </div>
    )
}

export default Packet
