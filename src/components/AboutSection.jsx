import React from "react";
import programmer from "../assets/icons/programmer.png";

const AboutSection = () => {
    return (
        <>
            <h2>About Me </h2>
            <div id="about" data-aos="zoom-in" className="two-grid">
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
                            I am a simple boy . And i have a Lot's of dream. I
                            wanna fulfill them and that's why i am busy to make
                            myself perfect. when i will be a programmer,,, I'll
                            know that my dream has succeed. I like coding so
                            much . I am 21 Years old. For more information you
                            can contact me or follow me on my social media.
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
