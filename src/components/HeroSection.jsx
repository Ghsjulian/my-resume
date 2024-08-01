import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import rightArrow from "../assets/icons/rightArrow.png";
import "../assets/css/index.css";
import { ReactTyped } from "react-typed";
import MySlider from "./Slider";

const HeroSection = () => {
    return (
        <main data-aos="zoom-in">
            <section data-aos="zoom-in" className="hero">
                <div className="hero-img">
                    <img
                        id="hero-logo"
                        src="images/ghs_julian_dev.png"
                        alt="Ghs Julian Web Developer"
                    />
                </div>
            </section>
            <section data-aos="zoom-in" className="hero">
                <h1 className="typer">
                    <ReactTyped
                        strings={[
                            "Web Developer",
                            "Web Designer",
                            "Back-End Developer",
                            "Front-End Developer",
                            "Mern Stack Developer",
                            "Full Stack Developer",
                            "Programmer & Freelancer"
                        ]}
                        cursorChar="|"
                        typeSpeed={90} // Adjust typing speed here (milliseconds)
                        backSpeed={80} // Adjust backspace speed (milliseconds)
                        loop // Set to loop through the strings continuously
                    />
                </h1>
                <h2 className="hero-text">
                    Create Your Website And Application, With My Professional
                    Expertise. Hire Me For Your Project Or Online Business.
                </h2>

                <div className="btn-area">
                    <a href="#what-we-can-do" id="shop">
                        See More
                        <img className="menu" src={rightArrow} />
                    </a>
                    <a href="#what-we-can-do" id="view">
                        Download CV
                        <img className="menu" src={rightArrow} />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default HeroSection;
