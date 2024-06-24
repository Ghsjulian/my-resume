import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });

    return (
        <>
            <HeroSection/>
        </>
    );
};

export default Home;
