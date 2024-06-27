import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });

    return (
        <>
            <HeroSection/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;
