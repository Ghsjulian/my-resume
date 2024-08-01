import React from "react";
import graphicdesign from "../assets/images/graphicdesign.png";
import article from "../assets/images/article.png";
import seo from "../assets/images/seo.png";
import ux from "../assets/images/ux.png";

const WhyUs = () => {
    return (
        <div data-aos="fade-up" className="section">
            <h2>Why Chose Me ?</h2>
             <p className="text">
                You can get extra services and user friendly layouts 
                Otherwise the website will be more attractive , I can grow your business and it will be 
                SEO friendly so that it will be rank on google very quickly.
                I will also work as your requirements and guide.
            </p>
            <div className="row-four">
                <div className="column">
                    <img src={graphicdesign} />
                    <h4>Graphics And Design</h4>
                    <p className="p-text">
                        Attractive design logo , brand , animation , Banaras and
                        many more. fast delivery and seo friendly.
                    </p>
                </div>
                <div className="column">
                    <img src={ux} />
                    <h4>Responsive Design Layout</h4>
                    <p className="p-text">
                        We provide the best design according to our clients
                        requirements. Our design looks more professional and
                        user friendly.
                    </p>
                </div>
                <div className="column">
                    <img src={seo} />
                    <h4>SEO And Optimization</h4>
                    <p className="p-text">
                        We'll help to improve your SEO keywords in your content
                        and fixed that . We have many features to complete this
                        task.
                    </p>
                </div>
                <div className="column">
                    <img src={article} />
                    <h4>Article/Content Writing </h4>
                    <p className="p-text">
                        We create seo friendly content to grow our client
                        business. our seo friendly content will be ranked in the
                        Google just in 24 hours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
