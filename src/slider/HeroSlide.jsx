import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import ghs1 from "../assets/images/ghs_1.png";
import ghs2 from "../assets/images/ghs_2.png";
import ghs3 from "../assets/images/ghs_3.png";
import ghs4 from "../assets/images/ghs_4.png";
import ghs5 from "../assets/images/ghs_10.png";
import ghs6 from "../assets/images/ghs_11.png";
import ghs7 from "../assets/images/ghs_12.png";
import ghs9 from "../assets/images/myLogo2.png";

const HeroSlide = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const images = [ghs1,ghs2,ghs3,ghs4,ghs5,ghs6,ghs7,ghs9];

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
            navigation={true}
            animationDuration={500}
            animationType="slide"
            speed={400}
            easing="linear"
        >
            {images.map((image, index) => (
                <div className="hero--img" key={index}>
                    <img src={image} />
                </div>
            ))}
        </ReactSimplyCarousel>
    );
};

export default HeroSlide;
