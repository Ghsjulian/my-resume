import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ghs from "../assets/img/ghs_10.png";

const Header = () => {
    const headerRef = useRef(null);
    const [isOpen, setisOpen] = useState(false);
    const openHeader = () => {
        headerRef.current.classList.toggle("show-header");
        setisOpen(!isOpen);
    };
    return (
        <>
            <header ref={headerRef} className="header">
                <img
                    src={ghs}
                    alt="Ghs Julian Web Developer | Web Designer Ghs Julian | Programmer"
                />
                <h3 className="name">Ghs Julian</h3>
                <h4>Web Developer & Desginer</h4>
                <div className="social-links">
                    <NavLink to="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                    </NavLink>
                    <NavLink to="#" className="facebook">
                        <i className="bx bxl-facebook-circle"></i>
                    </NavLink>
                    <NavLink to="#" className="facebook">
                        <i className="bx bxl-youtube"></i>
                    </NavLink>
                    <NavLink to="#" className="instagram">
                        <i className="bx bxl-instagram-alt"></i>
                    </NavLink>
                    <NavLink to="#" className="google-plus">
                        <i className="bx bxl-google"></i>
                    </NavLink>
                    <NavLink to="#" className="linkedin">
                        <i className="bx bxl-github"></i>
                    </NavLink>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li>
                            <NavLink to="/" className="active">
                                <i className="bx bx-home"></i>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                <i className="bx bx-user-circle"></i> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">
                                <i className="ri ri-building-line"></i> Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">
                                <i className="ri ri-tools-fill"></i> Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">
                                <i className="ri ri-server-line"></i> Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <i className="bx  bxl-whatsapp"></i> Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            <nav className="top-bar">
                <h3>Ghs Julian</h3>
                <button onClick={openHeader}>
                    <i className={`bx bx-${isOpen ? "x" : "menu"}`}></i>
                </button>
                <NavLink to="/contact">
                    <i className="bx bxl-whatsapp"></i>Contact
                </NavLink>
            </nav>
        </>
    );
};

export default Header;
