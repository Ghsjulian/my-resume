import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import ghs from "../assets/img/ghs_10.png";

const HeroSection = () => {
    return (
        <section data-aos="zoom-in" id="hero" className="hero section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <p data-aos="zoom-in">
                    Hey, Are you looking for a professional website developer
                    and designer, then you're the right place. Here you can get
                    your best service and you can hire me for your project. I'm
                    A
                </p>
                <h3>
                    <ReactTyped
                        strings={[
                            "Web Developer",
                            "Freelacer",
                            "Full Stack Developer",
                            "Developer & Designer",
                            "Website Developer",
                            "Front-End Developer",
                            "Back-End Developer",
                            "PHP Developer",
                            "SEO Expert",
                            "Ethical Programmer"
                        ]}
                        cursorChar="|"
                        typeSpeed={70} // Adjust typing speed here (milliseconds)
                        backSpeed={60} // Adjust backspace speed (milliseconds)
                        loop // Set to loop through the strings continuously
                    />
                </h3>
                <div data-aos="zoom-in" className="btn-area">
                    <a id="see-more" href="#about">
                        See More
                    </a>
                    <a
                        id="download"
                        href="/cv.pdf"
                        download="Ghs_Julian_CV.pdf"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
