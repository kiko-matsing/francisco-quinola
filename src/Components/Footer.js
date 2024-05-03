import React from "react";
import { Link } from "react-router-dom";
import SocMedFooter from "./SocMedFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div id="footer">
            <div className="main-container">
                <div className="footer-description">
                    <div className="content">
                        <div>
                            <h5><FontAwesomeIcon icon={faCode} className="faCode content-title" /> Franciso Quinola</h5>

                        </div>
                        <div>
                            <h6 className='content-desc'>Contact me now for Automation and Development needs! Full Time and Part Time !</h6>
                        </div>
                    </div>
                </div>
                <div className="footer-site-map">
                    <div className="content">
                        <div>
                            <h5>Site Map</h5>
                        </div>
                        <ul className="site-map content-desc">
                            <li className="link">
                                <a href="#navbar">Navigation</a>
                            </li>
                            <li className="link">
                                <a href="#hero">About Me</a>
                            </li>
                            <li className="link">
                                <a href="#automation">Automation</a>
                            </li>
                            <li className="link">
                                <a href="#development-container">Development</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-site-map">
                    <div className="content">
                        <div>
                            <h5>Contact Me</h5>
                        </div>
                        <ul className="site-map content-desc">
                            <ul className="site-map content-desc">
                                <li className="link">
                                    <a href="#">+63 991 795 5213</a>
                                </li>
                                <li className="link">
                                    <a href="#">iscolla.19@gmail.com</a>
                                </li>
                                <li className="link">
                                    <a href="https://www.linkedin.com/in/francisco-qui%C3%B1ola-26132319a/">Linkedin</a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

            </div>
            <hr className="line" />
            <SocMedFooter />
        </div>
    )
}

export default Footer