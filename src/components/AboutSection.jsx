import React from "react";
import programmer from "../assets/icons/programmer.png";

const AboutSection = () => {
    return (
        <>
            <h2>About Me </h2>
            <div data-aos="zoom-in" className="two-grid">
                <div data-aos="zoom-in" className="col">
                    <div className="about-img">
                        <img src={programmer} />
                    </div>
                </div>
                <div data-aos="zoom-in" className="col">
                    <div className="flex-center">
                        <article>
                            I'm Julie ! I am a web developer and designer. As
                            I'm a developer i am also a student of university. I
                            am doing a graduation in English literature. I live
                            with my parents in a small village of Bangladesh. My
                            biggest dream is being a best computer programmer.
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
