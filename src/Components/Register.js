import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./../firebase_setup/firebase";
import "react-toastify/dist/ReactToastify.css";

const Solo = () => {
    useEffect(() => {
        document.title = "Register - Notre Dame Math Club";
        const tHeight = document.querySelector('body').offsetHeight
        document.getElementsByClassName('boo')[0].style.marginBottom = `calc(100vh - ${tHeight}px)`;
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
                    <h1 className="ektuUpore">Register</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Register
                    </li>
                </ol>
            </section>
            <div className="container-fluid">
                <section className="row d-flex justify-content-center boo">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                            <div className="col-md-5 d-flex justify-content-center align-items-center">
                                <img src="assets/img/events/3rdNDMC2023.jpg"
                                     alt="..."
                                     className="regBanner"
                                />
                            </div>
                                <div className="col-md-7">
                                    <h2 className="mt-4 mb-4 btex text-center">
                                     3rd Annual Notre Dame Math Festival<br/>
                                    </h2>
                                    <h3 className="mb-4 text-center">
                                     <span>&mdash; </span> Registration Type <span> &mdash;</span> <br/>
                                    </h3>
                                    <div className="switch_reg text-center">
                                        <Link to="../register/solo">
                                            Solo
                                        </Link>
                                        <Link to="../register/team">
                                            Team
                                        </Link>
                                        <Link to="../register/ca">
                                            Campus Ambassador
                                        </Link>
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

export default Solo;
