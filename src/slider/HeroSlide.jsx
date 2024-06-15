import React from "react";
import Slider from "react-slick";

const slides = [
    {
        title: "Slide 1: Introduction",
        content: [
            "What is a carousel?",
            "Benefits of using carousels",
            "Use cases for carousels"
        ],
        speakerNotes:
            "In this first slide, we'll introduce the concept of carousels and explore the reasons why they're a valuable UI component. We'll also discuss some common scenarios where carousels can be beneficial for user experience."
    },
    {
        title: "Slide 2: Building a Carousel with React Slick",
        content: [
            "Installation of React Slick",
            "Basic component structure",
            "Adding slides and content"
        ],
        speakerNotes:
            "This slide dives into the practical aspects of building a carousel using React Slick. We'll go through the installation process, explore the core component structure, and demonstrate how to add slides with content."
    },
    {
        title: "Slide 3: Customization Options",
        content: [
            "Navigation controls (arrows, dots)",
            "Autoplay and transition effects",
            "Responsive design considerations"
        ],
        speakerNotes:
            "React Slick offers a variety of customization options to tailor your carousel to your specific needs. In this slide, we'll explore how to add navigation controls, configure autoplay and transition effects, and ensure your carousel is responsive for different screen sizes."
    }
];

const HeroSlide = () => {
    const settings = {
        dots: true
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map(slide => (
                    <div key={slide.title} className="carousel-slide">
                        <h3>{slide.title}</h3>
                        <ul>
                            {slide.content.map(point => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <div className="speaker-notes">
                            {slide.speakerNotes}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSlide;
