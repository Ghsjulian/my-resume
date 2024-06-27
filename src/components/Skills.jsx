import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ghs from "../assets/img/ghs_10.png";

const Skills = ({isTrue}) => {
    if(isTrue){
        document.title = "See My Skills And Experience | Know About And What I Can Do"
    }
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
             <article>
                Here's my all skills and experience. As a Full-Stack Web Developer i have theses languages and technologies.
                i have achieved theses all technologies from internet with self learning and i have made so many projects using 
                this popular technologies. Some skills are still required But I'll complete it very soon.
            </article>
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
