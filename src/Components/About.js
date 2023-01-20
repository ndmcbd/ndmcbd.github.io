import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.title = "About - Notre Dame Math Club";
    }, []);
    return (
        <div>
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">About</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                                Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        About
                    </li>
                </ol>
            </section>

            <div className="container-fluid">
            <section
                id="about"
                className=" section about_section row d-flex justify-content-center"
            >
                <div className="content row col-md-12 mwt">
                    <div
                        className="col-md-4 about_left px-2"
                        data-aos="zoom-in-up"
                    >
                        <img
                            draggable="false"
                            src="./assets/img/about/01.jpg"
                            alt="math"
                            className="img-fluid covimg"
                        />
                    </div>
                    <div
                        className="col-md-7 about_right px-2"
                        data-aos="zoom-in-up"
                    >
                        <p>
                            Notre Dame College Math Club is a student-led
                            organization that promotes the study and
                            appreciation of mathematics within the college
                            community. The club provides a welcoming and
                            supportive environment for students to engage with
                            mathematics beyond the classroom and to explore the
                            many ways in which math is used in the real world.
                            Members have the opportunity to participate in a
                            variety of activities, including guest lectures,
                            math competitions, and community service projects.
                        </p>
                        <p>
                            The Notre Dame College Math Club is a
                            great place to explore your interests and make new
                            friends. We welcome all students, regardless of
                            their level of math proficiency, to join us and be a
                            part of our vibrant community of math enthusiasts.
                        </p>
                    </div>
                </div>
                <div className="splash1 splash"></div>
                <div className="splash2 splash"></div>
            </section>

                <section id="counter_sec">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div
                                className="col-md-2 col-sm-6 col-xs-6 mx-3 coun1bg"
                                data-aos="zoom-in-up"
                            >
                                <h1 className="h1bigg text-center">
                                    4
                                </h1>
                                <p>FESTIVALS</p>
                            </div>
                            <div
                                className="col-md-2 col-sm-6 col-xs-6 mx-3 coun1bg"
                                data-aos="zoom-in-up"
                            >
                                <h1 className="h1bigg text-center">
                                    15
                                </h1>
                                <p>WORKSHOPS</p>
                            </div>
                            <div
                                className="col-md-2 col-sm-6 col-xs-6 mx-3 coun1bg"
                                data-aos="zoom-in-up"
                            >
                                <h1 className="h1bigg text-center">
                                    3/YR
                                </h1>
                                <p>MAGAZINES</p>
                            </div>
                            <div
                                className="col-md-2 col-sm-6 col-xs-6 mx-3 coun1bg"
                                data-aos="zoom-in-up"
                            >
                                <h1 className="h1bigg text-center">
                                    1K+
                                </h1>
                                <p>Members</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                id="contact"
                className="contact_section_home"
            >
                <div className="getint mwt row">
                    <div className="col-md-9">
                        <h1>Meet the Executives</h1>
                    </div>
                    <div className="col-md-3 text-right btnmo">
                        <Link
                            tabIndex="-1"
                            to="../executives"
                            className="btn btn-primary"
                        >
                            Executives{" "}
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
