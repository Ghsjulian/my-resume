import React from "react";
import programmer from "../assets/icons/programmer.png";

const Projects = () => {
    return (
        <>
            <h2>My Projects</h2>
            <div data-aos="zoom-in" className="two-grid">
                <div data-aos="zoom-in" className="col">
                <div className="projects">
                <div className="col">Col1</div>
                <div className="col">Col1</div>
                <div className="col">Col1</div>
                <div className="col">Col1</div>
                </div>
                </div>
                <div data-aos="zoom-in" className="col">
                    <div className="about-img">
                        <img src={programmer} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
