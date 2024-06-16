import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import ghs from "../assets/images/ghs_1.png";
import agent from "../assets/icons/agent_2.png";
import gh from "../assets/icons/gh.png";
import twiter from "../assets/icons/t.png";
import google from "../assets/icons/google.png";

const HeroSlide = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const images = [ghs, gh, google, twiter, agent];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveSlideIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            autoPlay={true}
            autoPlayInterval={3000}
            width={"100%"}
        >
            {images.map((image, index) => (
                <div className="hero--img" style={{ height: "350px", width: "350px" }} key={index}>
                    <img src={image} />
                </div>
            ))}
        </ReactSimplyCarousel>
    );
};

export default HeroSlide;
