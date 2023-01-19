import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const notify = () => toast.success('Your query was submitted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_6r11ebm",
            "template_g5uht89",
            form.current,
            "Hb4wfpq3cbPhtapl1"
        );
        // .then(
        //     (result) => {
        //         console.log(result.text);
        //     },
        //     (error) => {
        //         alert(error.text);
        //     }
        // );
        document.getElementById("contact-form").reset();
        notify();
    };
    useEffect(() => {
        document.title = "Contact - Notre Dame Math Club";
    }, []);
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">Contact</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                                Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Contact
                    </li>
                </ol>
            </section>

            <div className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                <div
                                    className="col-md-4 col-sm-6"
                                    data-aos="zoom-in-up"
                                >
                                    <div className="contact-card">
                                        <div className="icon">
                                            <i className="fa-thin fa-location-dot"></i>
                                        </div>
                                        <div className="contact-info">
                                            <h3>Address</h3>
                                            <p>
                                                <a>
                                                    Notre Dame College,
                                                    Motijheel, Dhaka-1000
                                                </a>
                                            </p>
                                        </div>
                                        <div className="contbg">
                                            <i className="fa-thin fa-location-dot"></i>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-md-4 col-sm-6"
                                    data-aos="zoom-in-up"
                                >
                                    <div className="contact-card">
                                        <div className="icon">
                                            <i className="fa-thin fa-envelope"></i>
                                        </div>
                                        <div className="contact-info">
                                            <h3>E-mail</h3>
                                            <p className="mt-3">
                                                <a
                                                    tabIndex="-1"
                                                    href="mailto:contact@ndmcbd.org"
                                                >
                                                    contact@ndmcbd.org
                                                </a>
                                            </p>
                                        </div>
                                        <div className="contbg">
                                            <i className="fa-thin fa-envelope"></i>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-md-4 col-sm-6"
                                    data-aos="zoom-in-up"
                                >
                                    <div className="contact-card">
                                        <div className="icon">
                                            <i className="fa-thin fa-phone"></i>
                                        </div>
                                        <div className="contact-info">
                                            <h3>Contact No.</h3>
                                            <p className="mt-3">
                                                <a
                                                    tabIndex="-1"
                                                    href="tel:+8801931- 093092"
                                                >
                                                    +8801931- 093092
                                                </a>
                                            </p>
                                        </div>
                                        <div className="contbg">
                                            <i className="fa-thin fa-phone"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="mwt row">
                                <div className="col-md-12">
                                    <div
                                        className="contact-form"
                                        data-aos="fade-up"
                                    >
                                        <h2>Get in Touch</h2>
                                        <form
                                            ref={form}
                                            onSubmit={sendEmail}
                                            id="contact-form"
                                        >
                                            <div className="col-md-12">
                                                <div className="row contform">
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Your Name"
                                                            required
                                                        ></input>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Your Email"
                                                            required
                                                        ></input>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            placeholder="Subject"
                                                            required
                                                        ></input>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea
                                                            name="message"
                                                            placeholder="Message"
                                                            rows="4"
                                                            maxLength="500"
                                                            style={{
                                                                resize: "none",
                                                            }}
                                                            required
                                                        ></textarea>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button
                                                            type="submit"
                                                            id="subbtn"
                                                        >
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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

export default Contact;
