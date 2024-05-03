import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLightbulb,
    faBars,
    faXmark,
    faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import "../Styles/theme.css";


const Navbar = (props) => {
    const [nav, setNav] = useState(false)


    const openNav = () => {
        setNav(!nav);
    };

    return (
        <div className="navbar-section" id="navbar">

            <div className="theme">
                <button className="navbar-title-button" onClick={props.onThemeChange}>
                    <FontAwesomeIcon icon={faLightbulb} className="userIcon" />
                </button>
            </div>

            <ul className="navbar-items">
                <li>
                    <Link to='/' className='navbar-links'>
                        Home
                    </Link>
                </li>
                <li>
                    <a href="https://www.canva.com/design/DAEkQcRoXdI/cKV8zqYNFiAKtT2qnq5x2g/edit?utm_content=DAEkQcRoXdI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className='navbar-links'>
                        Resume
                    </a>
                </li>
                <li>
                    <a href="#hero" className='navbar-links'>
                        What I Do
                    </a>
                </li>
                <li>
                    <a href="#footer" className='navbar-links'>
                        Contact
                    </a>
                </li>
            </ul>

            {/* Mobile */}
            <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-navbar-close">
                    <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
                </div>

                <ul className="mobile-navbar-links">
                    <li>
                        <Link onClick={openNav} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <a onClick={openNav} href="https://www.canva.com/design/DAEkQcRoXdI/cKV8zqYNFiAKtT2qnq5x2g/edit?utm_content=DAEkQcRoXdI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a onClick={openNav} href="#hero">
                            What I Do
                        </a>
                    </li>
                    <li>
                        <a onClick={openNav} href="#footer">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Hamburger Icon */}
            <div className="mobile-nav">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={openNav}
                    className="hamb-icon"
                />
            </div>
        </div >
    )
}

export default Navbar