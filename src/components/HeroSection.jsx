import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import ghs from "../assets/images/ghs_1.png";
import rightarrow from "../assets/icons/rightarrow.png";
import download from "../assets/icons/download.png";
import facebook from "../assets/icons/fb.png";
import youtube from "../assets/icons/youtube.png";
import instagram from "../assets/icons/insta.png";
import github from "../assets/icons/gh.png";
import twiter from "../assets/icons/t.png";
import google from "../assets/icons/google.png";
import HeroSlide from "../slider/HeroSlide";

const HeroSection = () => {
    return (
        <div data-aos="zoom-in" className="two-row">
            <div data-aos="zoom-in" className="col">
            <div className="hero-img">
                <HeroSlide />
                </div>
                {/*
                    <img
                         src={ghs}
                        alt="Web Developer Ghs Julian,Ghs Julian , Programmer Ghs Julian, Web Developer And Designer Ghs Julian"
                     />
                     */}
            </div>
            <div data-aos="zoom-in" className="col">
                <div className="flex">
                    <h3 className="intro">
                        <strong>I'm a</strong>
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
                            typeSpeed={70} // Adjust typing speed here (milliseconds)
                            backSpeed={60} // Adjust backspace speed (milliseconds)
                            loop // Set to loop through the strings continuously
                        />
                    </h3>
                    <h2 className="hero-heading">Welcome To My Portfolio</h2>
                    <article>
                        Hey, Are you looking for a professional web Developer
                        and Designer. You're the right place. As a professional
                        website developer , i can help you to build your website
                        or i can help you any problems related to programming
                        IT.
                    </article>
                    <article>
                        Here's my CV and contact information , Full free to
                        contact with me , I'll response you as soon as possible.
                        Or you can connect with me on my social media.
                    </article>
                </div>
                <div className="bottom-flex">
                    <div className="social">
                        <NavLink to="/" id="download">
                            <img
                                className="icon"
                                src={facebook}
                                alt="Facebook"
                            />
                        </NavLink>
                        <NavLink to="/" id="download">
                            <img className="icon" src={youtube} alt="YouTube" />
                        </NavLink>
                        <NavLink to="/" id="download">
                            <img className="icon" src={google} alt="Google" />
                        </NavLink>
                        <NavLink to="/" id="download">
                            <img className="icon" src={twiter} alt="Twiter" />
                        </NavLink>
                        <NavLink to="/" id="download">
                            <img
                                className="icon"
                                src={instagram}
                                alt="Instagram"
                            />
                        </NavLink>
                        <NavLink to="/" id="download">
                            <img className="icon" src={github} alt="GitHub" />
                        </NavLink>
                    </div>
                    <div className="button-area">
                        <NavLink to="/" id="see-more">
                            See More
                            <img
                                className="icon"
                                src={rightarrow}
                                alt="See More"
                            />
                        </NavLink>

                        <NavLink to="/" id="download">
                            Download CV
                            <img
                                className="icon"
                                src={download}
                                alt="Download CV"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
