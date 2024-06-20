import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import gh from "../assets/icons/gh.png";

const Skills = () => {
    const [ProjectsData, setProject] = useState([]);
    const url = "./data/icons.json";
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data) {
                    setProject(data);
                }
            });
    }, []);
    return (
        <>
            <h2>My Skills</h2>
            <div id="skills" data-aos="zoom-in" className="">
                <div className="skills">
                    {ProjectsData.map(project => {
                        return (
                            <div data-aos="zoom-in" className="col">
                                <img
                                    src={project.project_img}
                                    alt="Project Image"
                                />
                                <h3>{project.project_name}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Skills;
