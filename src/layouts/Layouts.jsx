import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
/* LOAD FONTAWESOME ICONS */
import "../assets/icons/css/fontawesome.css";
import "../assets/icons/css/brands.css";
import "../assets/icons/css/solid.css";
/* LOAD CUSTOM CSS */
import "../assets/css/responsive.css";
import "../assets/css/animation.css";
import "../assets/css/layouts.css";
import "../assets/css/page.css";
import "aos/dist/aos.css";

const Layouts = ({ children }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Header />
            <section>{children}</section>
            <Footer />
        </>
    );
};

export default Layouts;
