import React from "react";
import development from "../assets/images/development.png";
import coding from "../assets/icons/coding.png";
import task from "../assets/icons/typography.png";
import time from "../assets/images/graphicdesign.png";
import dashboard from "../assets/icons/video_editing.png";
import seo from "../assets/icons/seo.png";
import service from "../assets/images/service.png";
import what_we_can_do from "../assets/icons/what_can_do.png";

const ServiceSection = () => {
    return (
        <div data-aos="zoom-in" className="section">
            <h2>
               What I Can Do For You ?
            </h2>
            <p className="text">
                As a professional web developer i have proper skills and experience 
                that i can create and build your project easily. I can build your fully site.
                i will design responsive and user friendly website. If you wanna hair me or contact me and before reaching me out 
                I'm showing some of my previous projects and work that you can be satisfied.
            </p>
            <div className="row">
                <div data-aos="zoom-in" className="col">
                    <img src={development} />
                    <h4>Web Development & Design</h4>
                    <p className="p-text">
                        Transform your online presence with our expert web
                        development and design services. From custom websites to
                        e-commerce solutions, we craft digital experiences that
                        drive engagement.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={seo} />
                    <h4>SEO And Optimization</h4>
                    <p className="p-text">
                        Optimization is the process of fine-tuning your website
                        to ensure it loads quickly, is user-friendly, and
                        provides a seamless experience for your visitors. A
                        well-optimized website.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={coding} />
                    <h4>Coding & IT Technology</h4>
                    <p className="p-text">
                        Expert coding and IT solutions for businesses, driving
                        growth and productivity through custom software
                        development, IT consulting, and innovative technology
                        solutions.
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={time} />
                    <h4>Graphics Design</h4>
                    <p className="p-text">
                        Elevate your brand's visual appeal with our expert
                        graphics design services. From logos to brochures, our
                        team of skilled designers crafts visually stunning
                        graphics that capture your brand's .
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={dashboard} />
                    <h4>Video Editing & Production</h4>
                    <p className="p-text">
                        Take your video content to the next level with our
                        professional video editing services. Our team of skilled
                        editors crafts engaging, high-quality videos that
                        captivate your audience .
                    </p>
                </div>
                <div data-aos="zoom-in" className="col">
                    <img src={task} />
                    <h4>Logo Design</h4>
                    <p className="p-text">
                        Make a strong first impression with a custom logo design
                        that accurately represents your brand's values, mission,
                        and personality. Our expert designers create unique,
                        scalable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
