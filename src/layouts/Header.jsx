import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    const navRef = useRef(null);
    const openNav = () => {
        navRef.current.classList.toggle("mobile-menu");
    };
    return (
        <header>
            <div className="logo">Ghs Julian</div>
            <div ref={navRef} className="links">
                <h3>Menu</h3>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Contact</NavLink>
                <NavLink to="/">Services</NavLink>
                <NavLink to="/">Projects</NavLink>
                <NavLink id="talk" to="/">
                    Let's Talk
                </NavLink>
            </div>
            <div onClick={openNav} className="nav-btn">
                <button>
                    <i className="fa-solid fa-line"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
