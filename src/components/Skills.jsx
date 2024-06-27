import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ghs from "../assets/img/ghs_10.png";

const Skills = () => {
    const [ProjectsData, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "./data/icons.json";
    const fetchData = async url => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                setProject(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData(url);
    }, []);

    return (
        <section data-aos="zoom-in" id="projects" className="projects">
            <h2 data-aos="zoom-in" id="heading">
                My All Skills
            </h2>
            <div data-aos="zoom-in" className="skill-row">
                {loading && (
                    <div className="loader">
                        <h2>Loading...</h2>
                    </div>
                )}
                {ProjectsData.map(project => {
                    return (
                        <div data-aos="zoom-in" className="skill">
                            <img
                                className="skill-img"
                                src={project.project_img}
                                alt="Web Developer Ghs Julian"
                            />
                            <h3>{project.project_name}</h3>
                            <h4>{project.project_persent}</h4>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
