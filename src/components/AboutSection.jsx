import React from "react";
import ghs from "../assets/img/bg_2.png";

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <h2 id="heading">About Me</h2>
            <div className="two-row">
                <div className="col">
                    <img
                        id="user"
                        src={ghs}
                        alt="Ghs Julian Web Developer Designer"
                    />
                </div>
                <div className="col">
                <article>
                 I am Ghs Julian a professional web developer and designer.
                 I am a student department of English. I am doing a graduation in English. 
                 Web Development is my hobby and i have learned everything about coding and website development from self learning.
                 Most of them i have learned from Internet.
                 I love my self study. I am from Bangladesh.
                 I live in Bangladesh with my parents in a small village of Bangladesh.
                 To know more about myself or wanna talk with me please contact me or hire me for your requirements.
                </article>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
