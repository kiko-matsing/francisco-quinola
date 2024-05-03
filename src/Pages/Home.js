import React, { useState } from "react";
import Automation from "../Components/Automation";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Development from "../Components/Development";

// import '../Styles/Home.css';

const Home = () => {

    const [theme, setTheme] = useState(true);

    const onThemeChange = () => {
        setTheme(!theme);
    }


    return (
        <div className={`home-section ${theme ? 'light' : 'dark'}`}>
            <Navbar theme={theme} onThemeChange={onThemeChange} />
            <Hero />
            <Automation />
            <Development />
            <Footer />
        </div>
    )
}

export default Home