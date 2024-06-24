import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                © <span>Copyright</span>
                
                <span> All Rights Reserved</span>
            </p>
            <p>
                Designed by -<NavLink href="/"> Ghs Julian</NavLink>
            </p>
        </footer>
    );
};

export default Footer;
