import React from "react";
import { NavLink } from "react-router-dom";
import programmer from "../assets/icons/project.svg";

const Projects = () => {
    return (
        <>
            <h2>My Projects</h2>
            <div id="projects" data-aos="zoom-in" className="two-grid">
                <div data-aos="zoom-in" className="col">
                    <div className="projects">
                        <div className="col">
                            <img src={programmer} alt="Projects" />
                            <h3>Responsive Landing Page</h3>
                            <NavLink to="/" target="_blank">
                                View Demo{" "}
                            </NavLink>
                        </div>
                        <div className="col">
                            <img src={programmer} alt="Projects" />
                            <h3>Responsive Landing Page</h3>
                            <NavLink to="/" target="_blank">
                                View Demo{" "}
                            </NavLink>
                        </div>
                        <div className="col">
                            <img src={programmer} alt="Projects" />
                            <h3>Responsive Landing Page</h3>
                            <NavLink to="/" target="_blank">
                                View Demo{" "}
                            </NavLink>
                        </div>
                        <div className="col">
                            <img src={programmer} alt="Projects" />
                            <h3>Responsive Landing Page</h3>
                            <NavLink to="/" target="_blank">
                                View Demo{" "}
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="col">
                    <div className="about-img">
                        <img src={programmer} />
                    </div>
                    <div className="flex-center">
                        <article>
                            As a developer, i have made so many projects for
                            improving my development skills. Since i was
                            learning development technology from that time i had
                            started to build project for my education skills and
                            i have also pushed them in to my GitHub account.
                            Here's i have shown some projects which i have made.
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
