import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";

const Home = () => {
    document.title =
        "Ghs Julian - Official Website And Service Portal | Get In Touch With Me | Ghs Julian Web Developer And Designer";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });

    return (
        <>
            <HeroSection />
            <AboutSection />
            <Projects />
        </>
    );
};

export default Home;
