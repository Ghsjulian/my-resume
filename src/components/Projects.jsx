import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import programmer from "../assets/icons/project.svg";

const Projects = () => {
    /*  document.title =
        "See My Latest Projects | My All Projects Are Included Here";
        */
    const [Projects_Data, setProject_Data] = useState([]);
    const url = "./data/data.json";
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data) {
                    setProject_Data(data);
                }
            });
    }, []);

    return (
        <>
            <h2>My Projects</h2>
            <div id="projects" data-aos="zoom-in" className="">
                <div className="projects">
                    {Projects_Data.map(project => {
                        return (
                            <div data-aos="zoom-in" className="col">
                                <img
                                    src={project.project_img}
                                    alt="Project Image"
                                />
                                <h3>{project.project_name}</h3>
                                <NavLink
                                    key={project.project_id}
                                    to={project.project_url}
                                    target="_blank"
                                >
                                    View Demo
                                </NavLink>
                            </div>
                        );
                    })}
                    {/*
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
                        */}
                </div>
                {/*
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
                */}
            </div>
        </>
    );
};

export default Projects;
