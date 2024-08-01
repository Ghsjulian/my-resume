import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ArsenalSeo from "../components/ArsenalSeo";
import WhyUs from "../components/WhyUs";
import Projects from "../components/Projects";
import OurTeam from "../components/OurTeam";
import DevelopmentTools from "../components/DevelopmentTools";

const Home = () => {
    document.title =
        "Bak-Agency Official Website And Service Portal | Get Our Best Service";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });

    return (
        <>
            <HeroSection />
            <WhyUs />
            <ServiceSection />
            <Projects />
        </>
    );
};

export default Home;
