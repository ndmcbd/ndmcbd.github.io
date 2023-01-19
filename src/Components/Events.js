import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EventsJSON from "./../data/events.json";

const Events = () => {
	useEffect(() => { 
		document.title = "Events - Notre Dame Math Club";
	},[]);
    return (
        <div>
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">EVENTS</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Events
                    </li>
                </ol>
            </section>

            <div className="container-fluid">
                <section
                    id="events"
                    className="events_section_sin row d-flex justify-content-center"
                >
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                {
                                    EventsJSON && EventsJSON.slice(0).reverse().map((event,idx) => {
                                        return(
                                            <div
                                                className="col-md-4 col-sm-6"
                                                data-aos="zoom-in-up"
                                                key={idx}
                                            >
                                                <div className="card">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/' + event.event_cover}
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
                            </div>
                        </div>
                    </div>
                    <div className="splash1 splash"></div>
                    <div className="splash2 splash"></div>
                </section>
            </div>
        </div>
    );
};

export default Events;
