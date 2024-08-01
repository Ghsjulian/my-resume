import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import "../assets/css/Navbar.css";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const closeNav = () => {
        setIsChecked(false);
    };
    const goToHome = () => {
        navigate("/");
        closeNav();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <header>
            <div className="container">
                <input
                    checked={isChecked}
                    onChange={handleOnChange}
                    type="checkbox"
                    name="check"
                    id="check"
                />
                <div onClick={goToHome} className="logo-container">
                    <img src={logo} />
                    <h3 className="logo">
                        Ghs<span></span>
                        <span className="third--logo">Julian</span>
                    </h3>
                </div>

                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/" ? "active" : ""}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/about" ? "active" : ""}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                             <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/about" ? "active" : ""}
                                    to="/skills"
                                >
                                    My Skills
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink
                                    onClick={closeNav}
                                    className={path == "/about" ? "active" : ""}
                                    to="/latest-projects"
                                >
                                    Latest Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="log-sign">
                        <NavLink
                            onClick={closeNav}
                            to="/contact"
                            className="btn transparent"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            onClick={closeNav}
                            to="/our-team"
                            id="team"
                            className="btn transparent"
                        >
                            Resume
                        </NavLink>
                    </div>
                </div>

                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
