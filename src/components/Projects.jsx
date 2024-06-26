import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ghs from "../assets/img/ghs_10.png";

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
        <section data-aos="zoom-in" id="projects" className="projects">
            <h2 data-aos="zoom-in" id="heading">My Latest Projects</h2>
            <div className="grid-row">
                {Projects_Data.map(project => {
                    return (
                        <div data-aos="zoom-in" className="col" key={project.project_id}>
                            <img src={project.project_img} alt="Ghs Julian - Projects" />
                            <h3 className="title"> {project.project_name}</h3>
                            <NavLink 
                                    to={project.project_url}
                                    target="_blank">
                                View Demo
                            </NavLink>
                        </div>
                    );
                })}
                {/*
                <div className="col">
                    <img src={ghs} alt="Ghs Julian - Projects" />
                    <h3 className="title"> Awesome E Commerce</h3>
                    <NavLink to="/" target="_blank">
                        View Demo{" "}
                    </NavLink>
                </div>
                */}
            </div>
        </section>
    );
};

export default Projects;
