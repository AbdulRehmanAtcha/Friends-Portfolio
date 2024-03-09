import React, { useState } from "react";
// import hamburger from "../../images/hamburger.png";
// import close from "../../images/close.png";
// import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

// import "./style.css";

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const toggleHandler = () => {
        setIsButtonClicked(!isButtonClicked);
    };
    const changeBackGround = () => {
        if (window.scrollY >= 40) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    window.addEventListener("scroll", changeBackGround);

    return (
        <>
            <nav className={navBar ? "active" : ""}>
                <div className="flex gap-x-2 cursor-pointer">
                    <img src="https://syed-faraz.netlify.app/assets/logo-eb18f72d.png" alt="Rocket" style={{ height: "30px", width: "30px" }} />
                    <h2 className="text-2xl">Syed Umair</h2>
                </div>
                <div className="links">
                    <ul id="navbar" className={isButtonClicked ? "show" : "hide"}>
                        <li>
                            <Link
                                to="Home"
                                smooth={true}
                                offset={30}
                                duration={500}
                                onClick={toggleHandler}
                            >
                                <span>01.</span>Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="About"
                                smooth={true}
                                offset={0}
                                duration={800}
                                onClick={toggleHandler}
                            >
                                <span>02.</span> About
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="Skills"
                                smooth={true}
                                offset={40}
                                duration={1100}
                                onClick={toggleHandler}
                            >
                                <span>03.</span> Skills
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                to="Projects"
                                smooth={true}
                                offset={40}
                                duration={1300}
                                onClick={toggleHandler}
                            >
                                <span>03.</span> Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Contact"
                                smooth={true}
                                offset={0}
                                duration={1400}
                                onClick={toggleHandler}
                            >
                                <span>04.</span> Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="mobile">
                    {/* <img
            src={isButtonClicked ? close : hamburger}
            alt=""
            onClick={toggleHandler}
          /> */}
                    {isButtonClicked ? <IoMdClose color="white" onClick={toggleHandler} /> : <GiHamburgerMenu color="white" onClick={toggleHandler} />}
                </div>
            </nav>
        </>
    );
};

export default Navbar;