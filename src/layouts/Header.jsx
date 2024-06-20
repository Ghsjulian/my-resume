import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import menu from "../assets/icons/menu.png";
import close from "../assets/icons/close.png";
import call from "../assets/icons/call.png";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    const [isOpen, setisOpen] = useState(false);
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    const navRef = useRef(null);
    const openNav = () => {
        navRef.current.classList.toggle("mobile-menu");
        setisOpen(!isOpen);
    };

    const closeMenu = () => {
        navRef.current.classList.remove("mobile-menu");
    };

    return (
        <header>
            <div className="logo">Ghs Julian</div>
            <div ref={navRef} className="links">
                <h3>Menu</h3>
                <NavLink onClick={closeMenu} to="/">
                    Home
                </NavLink>
                <a onClick={closeMenu} href="#about">About</a>
                <NavLink onClick={closeMenu} to="https://web.facebook.com/ghs.julian.85">
                    Contact
                </NavLink>
                <a onClick={closeMenu} href="#projects">Projects</a>
                <NavLink onClick={closeMenu} id="talk" to="https://web.facebook.com/ghs.julian.85">
                    <img src={call} alt="Talk Now" /> Let's Talk
                </NavLink>
            </div>
            <div onClick={openNav} className="nav-btn">
                <button>
                    <img
                        className="icon"
                        src={isOpen ? close : menu}
                        alt="Menu Bar"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
