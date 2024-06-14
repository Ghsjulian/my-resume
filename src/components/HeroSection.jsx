import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ghs from "../assets/images/ghs_1.png";

const HeroSection = () => {
    return (
        <div data-aos="zoom-in" className="two-row">
            <div className="col">
                <div className="hero-img">
                    <img
                        src={ghs}
                        alt="Web Developer Ghs Julian,Ghs Julian , Programmer Ghs Julian, Web Developer And Designer Ghs Julian"
                    />
                </div>
            </div>
            <div className="col">
                            <h3 className="intro">
                    I am a <span>Web Developer</span>
                </h3>
                <h2 className="hero-heading">Welcome To My Portfolio</h2>
                <article>
                    Hey , Are you looking for a professional web Developer and
                    Designer. You're the right place. As a professional website
                    developer , i can help you to build your website or i can
                    help you any problems related to programming IT.
                </article>
            </div>
        </div>
    );
};

export default HeroSection;
