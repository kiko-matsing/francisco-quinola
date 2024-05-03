import React from "react";
import { Link } from "react-router-dom";
import Me from "../Assets/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <div className='section-container' id="hero">
            <div className="hero-section">
                <div className="text-section">
                    <p className="text-headline">
                        <FontAwesomeIcon icon={faCode} className="robotIcon" /> Hi Visitor !</p>
                    <h2 className="text-title">
                        Take A Look at what I can Do!
                    </h2>
                    <p className="text-descritpion">
                        Talk to an experienced developer now!
                    </p>
                    <a href="#footer" className="text-appointment-btn">Contact Me Now!</a>
                    <div className="text-stats">
                        <div className="text-stats-container">
                            <p>2+ yrs</p>
                            <p>Development</p>
                        </div>
                        <div className="text-stats-container">
                            <p>5+ yrs</p>
                            <p>Automation</p>
                        </div>
                        <div className="text-stats-container">
                            <p>10+</p>
                            <p>Tools</p>
                        </div>

                    </div>
                </div>

                <div className="hero-image-section">
                    <img className="hero-image1" src={Me} alt="Me" />
                </div>

            </div>
        </div>
    )
}


export default Hero