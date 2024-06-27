import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ghs from "../assets/img/ghs_10.png";

const Projects = ({isTrue}) => {
     if(isTrue){
     document.title =
        "See My Latest Projects | My All Projects Are Included Here | Web Developer Ghs Julian";
     } 
    const [loading, setLoading] = useState(false);
    const [Projects_Data, setProject_Data] = useState([]);
    const url = "./data/data.json";
    const fetchData = async url => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                setProject_Data(data);
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
                My Latest Projects
            </h2>
             <article>
                    I have so many projects and self learning projects. you can
                    check it here i have updated the live demo link and
                    screenshots please check it out. For more details you can
                    visit my GitHub Profile.
                </article>
            <div className="grid-row">
                {loading && (
                    <div className="loader">
                        <h2>Loading...</h2>
                    </div>
                )}
                {Projects_Data.map(project => {
                    return (
                        <div
                            data-aos="zoom-in"
                            className="col"
                            key={project.project_id}
                        >
                            <img
                                src={project.project_img}
                                alt="Ghs Julian - Projects"
                            />
                            <h3 className="title"> {project.project_name}</h3>
                            <NavLink to={project.project_url} target="_blank">
                                View Demo
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
