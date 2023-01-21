import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.title = "Publications - Notre Dame Math Club";
    }, []);
    return (
        <div>
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">Publications</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                                Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    Publications
                    </li>
                </ol>
            </section>

            <div className="container-fluid">
            <section
                id="about"
                className=" section about_section row d-flex justify-content-center"
            >
                <div className="pubq content row col-md-12 mwt">
                        <div className="col-md-5 ccov">
                            <div className="pub_cover cov1">
                                <img src={process.env.PUBLIC_URL + "/assets/img/publications/TheFunction19.jpg"} alt="The Function '19" />
                            </div>
                            <div className="pub_cover cov2">
                                <img src={process.env.PUBLIC_URL + "/assets/img/publications/TheNumber2022.jpg"} alt="The Number 2022" />
                            </div>
                        </div>
                    <div
                        className="col-md-7 about_right px-2"
                    >
                        <p>
                        NDMC has three types of publications: "The Plane", "The Number", and "The Function". "The Plane" is a half-yearly wall magazine that focuses on a specific math concept. "The Number" is a full handwritten publication that is released twice a year. "The Function" is the club's annual main publication, showcasing all of the club's activities and achievements from the previous year. These publications testify the hard work and dedication of the NDMC's members and allow them to share their passion for math with others.
                        </p>
                    </div>
                </div>
                <div className="content row col-md-12 mwt">
                        <div className="col-md-3 plane text-center">
                            <a href="../assets/img/publications/ThePlaneLeft.png">
                                <img className="planeL" src={process.env.PUBLIC_URL + "/assets/img/publications/ThePlaneLeft.png"} alt="The Plane (Left)" />
                            </a>
                        </div>
                        <div className="col-md-9 plane text-center">
                            <a href="../assets/img/publications/ThePlaneRight.png">
                                <img className="planeR" src={process.env.PUBLIC_URL + "/assets/img/publications/ThePlaneRight.png"} alt="The Plane (Left)" />
                            </a>
                        </div>
                </div>
                <div className="splash1 splash"></div>
                <div className="splash2 splash"></div>
            </section>

                
                <section
                id="contact"
                className="contact_section_home"
            >
                <div className="getint mwt row">
                    <div className="col-md-9">
                        <h1>Have any Queries?</h1>
                    </div>
                    <div className="col-md-3 text-right btnmo">
                        <Link
                            tabIndex="-1"
                            to="../contact"
                            className="btn btn-primary"
                        >
                            Contact Us{" "}
                            <i className="fa-thin fa-arrow-right"></i>    
                        </Link>
                    </div>

                    <div className="splash1 smolsplash"></div>
                    <div className="splash2 smolsplash"></div>
                </div>
            </section> 
            </div>
    </div>
    );
};

export default About;
