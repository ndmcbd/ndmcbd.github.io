import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo_svg from "./../img/ndmc_logo_d.svg";
import EventsJSON from "./../data/events.json";

const Home = () => {
    useEffect(() => {
        document.title = "Home - Notre Dame Math Club";
        window.history.pushState("", "", "/");
    }, []);
    return (
        <div className="container-fluid">
            <section className="section home-sec row d-flex justify-content-center">
                <div className="col-md-6 home_left p-5">
                    <div className="home">
                        <h1 data-aos="fade-zoom-in">
                            Notre Dame
                            <br />
                            Math Club
                        </h1>
                        <p data-aos="fade-zoom-in">
                        Welcome to the Notre Dame Math Club! We offer a collaborative environment for students to explore and grow their math skills.
                        </p>
                        <Link tabIndex="-1" to="../about" data-aos="fade-zoom-in"  className="btn btn-primary">
                                About
                        </Link>
                        <Link tabIndex="-1" to="../events" data-aos="fade-zoom-in"  className="btn btn-secondary">
                            Events
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 home_right" data-aos="zoom-in-up">
                    <div className="ayo">
                        <img
                            draggable="false"
                            src={logo_svg}
                            alt="math"
                            className="img-fluid"
                        />
                        <div className="secret0"></div>
                    </div>
                </div>
                <a tabIndex="-1" className="scrollDown" href="#about">
                    <i className="fa-thin fa-chevron-down"></i>
                </a>
            </section>

            <section
                id="about"
                className=" section about_section row d-flex justify-content-center"
            >
                <div className="headerh mb-30">
                    <h1 className="t1">ABOUT</h1>
                </div>
                <div className="content row col-md-12 mwt">
                    <div
                        className="col-md-4 about_left px-2"
                        data-aos="zoom-in-up"
                    >
                        <img
                            draggable="false"
                            src="./ndmcbd/assets/img/about/01.jpg"
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
                            <h1 className="h1bigg text-center">3/Yr</h1>
                            <p>PUBLICATION</p>
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
                id="events"
                className="events_section row d-flex justify-content-center"
            >
                <div className="headerh mb-30 mt-30">
                    <h1>EVENTS</h1>
                </div>
                <div className="mwt row">
                                {
                                    EventsJSON && EventsJSON.slice(-3).reverse().map((event, idx) => {
                                        return(
                                            <div
                                                className="col-md-4 col-sm-6"
                                                data-aos="zoom-in-up"
                                                key={idx}
                                            >
                                                <div className="card">
                                                    <img
                                                        src={event.event_cover}
                                                        className="card-img-top"
                                                        alt="..."
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            <i className="fa-regular fa-calendar"></i>
                                                            {event.event_date}
                                                        </h5>
                                                        <p className="card-text">
                                                            {event.event_title}
                                                        </p>
                                                        <a
                                                            tabIndex="-1"
                                                            href={event.event_link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="cstbtn"
                                                        >
                                                            Learn More{" "}
                                                            <i className="fa-thin fa-arrow-up-right-from-square"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>            
                                        )
                                    })
                                }
                                <div className="col-md-12 text-center btnmo">
                                    <Link
                                        tabIndex="-1"
                                        to="./events"
                                        className="btn btn-primary"
                                    >
                                        See More{" "}
                                        <i className="fa-thin fa-arrow-right"></i>
                                    </Link>
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
                        <h1>Get in Touch</h1>
                    </div>
                    <div className="col-md-3 text-right btnmo">
                        <Link
                            tabIndex="-1"
                            to="./contact"
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
    );
};

export default Home;
