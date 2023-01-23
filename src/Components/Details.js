import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink as HLink } from 'react-router-hash-link';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./../firebase_setup/firebase";
import "react-toastify/dist/ReactToastify.css";
import DetailsJSON from "./../data/details.json";

const Solo = () => {

    const descModal = (evn, cat, desc, rules) => {
        const modal = document.getElementById("descModal");
        const descModalContainer = document.getElementById("descModalContainer");
        const modalTitle = document.getElementById("modalTitle");
        const modalCategory = document.getElementById("modalCategory");
        const modalDesc = document.getElementById("modalDesc");

        modalTitle.innerHTML = evn;
        modalCategory.innerHTML = cat;
        modalDesc.innerHTML = "";
        descModalContainer.innerHTML = "";
        for (let i = 0; i < desc.length; i++) {
            modalDesc.innerHTML += desc[i] + "<br/>";
        }
        for (let i = 0; i < rules.length; i++) {
            descModalContainer.innerHTML += '<h4><span>&#x25cf; </span> ' + rules[i] + '</h4>';
        }

        modal.style.visibility = "visible";
    };

    const closeModal = () => {
        const cModal = document.getElementById("descModal");
        cModal.style.visibility = "hidden";
    };
    
    useEffect(() => {
        document.title = "3rd Annual Notre Dame Math Festival - Notre Dame Math Club";
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
                    <h1 className="ektuUpore">3rd Annual Notre Dame <br/> Math Festival</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Event
                    </li>
                </ol>
            </section>
            <div id="descModal" className="modal">
                <div className="modal-content moneywhere" id="modalContent">
                    <i className="fa-thin fa-xmark close" onClick={
                        () => {
                            closeModal();
                            document.getElementById("modalTitle").innerHTML = "";
                            document.getElementById("modalCategory").innerHTML = "";
                            document.getElementById("descModalContainer").innerHTML = "";
                            document.getElementById("modalDesc").innerHTML = "";
                        }
                    }></i>
                    <h3 id="modalTitle" className="text-center"></h3>
                    <p id="modalCategory" className="text-center"></p>
                    <h4 id="modalDesc"></h4>
                    <div id="descModalContainer"></div>
                    
                </div>
            </div>
            <div className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                <div className="col-md-12">
                                    <h3 className="mb-4 text-center">
                                        <span>&mdash; </span> Quick Links <span> &mdash;</span> <br/>
                                    </h3>
                                    <div className="switch_reg text-center mb-5">
                                        <HLink to="#categories" className="col-md-2 col-sm-4">Categories</HLink>
                                        <HLink to="#segements" className="col-md-2 col-sm-4">Segments</HLink>
                                        <HLink to="#schedule" className="col-md-2 col-sm-4">Schedule</HLink>
                                        <HLink to="#contacts" className="col-md-2 col-sm-4">Contacts</HLink>
                                        <Link to="../../register" className="col-md-2 col-sm-4">Register</Link>
                                    </div>
                                    <h3 className="mb-4 text-center smargin" id="categories">
                                        <span>&mdash; </span> Categories <span> &mdash;</span> <br/>
                                    </h3>
                                    <div className="row mb-5 cco d-flex justify-content-center align-items-center text-center">
                                        <div className="col-md-3">
                                            <center>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Junior</h5>
                                                        <p className="card-text op">
                                                            Class 6, 7, 8
                                                        </p>
                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                        <div className="col-md-3">
                                            <center>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Secondary</h5>
                                                        <p className="card-text op">
                                                            Class 9, 10
                                                        </p>
                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                        <div className="col-md-3">
                                            <center>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Higher Secondary</h5>
                                                        <p className="card-text op">
                                                        HSC’22, 23 & 24
                                                        </p>
                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                    </div>

                                    <h3 className="text-center smargin" id="segements">
                                        <span>&mdash; </span> Segments <span> &mdash;</span> <br/>
                                    </h3>
                                    <p className="mb-4 text-center clkdet">(Click for more details)</p>
                                    <div className="row d-flex justify-content-center align-items-center text-center">
                                        {
                                            DetailsJSON && DetailsJSON.map((event, idx) => {
                                                let cat = event.name.split(";")[0];
                                                let evn = event.name.split(";")[1];
                                                let desc = event.description;
                                                let rules = event.rules;
                                                return (
                                                    <div className="col-md-3 col-sm-6 curs">
                                                        <center>
                                                            <div className="card" onClick={
                                                                () => {
                                                                    descModal(evn, cat, desc, rules);
                                                                }
                                                            }>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{cat}</h5>
                                                                    <p className="card-text op">
                                                                        {evn}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </center>
                                                    </div>
                                                );
                                            })
                                        }

                                    </div>

                                    <h3 className="mt-4 mb-4 text-center smargin" id="schedule">
                                        <span>&mdash; </span> Schedule <span> &mdash;</span> <br/>
                                    </h3>
                                    <div className="row d-flex justify-content-center align-items-center text-center">
                                        <div className="col-md-12">
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr className="tableMain">
                                                        <td scope="col">Day</td>
                                                        <td scope="col">Time</td>
                                                        <td scope="col">Event</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row" rowSpan="3">Day 1</td>
                                                        <td>2:30 p.m. - 6:30 p.m.</td>
                                                        <td>Reporting of Math Project, Wall Magazine & Scrapbook</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3:15 p.m. - 3:45 p.m.</td>
                                                        <td>Human Calculator</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4:00 p.m. - 4:30 p.m.</td>
                                                        <td>Crossword</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" rowSpan="9">Day 2</td>
                                                        <td>8:00 a.m. - 12:00 a.m.</td>
                                                        <td>Reporting + Judgement of Math Project, Wall Magazine & Scrapbook</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8:30 a.m. - 9:30 a.m.</td>
                                                        <td>Calculus Mania</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9:45 a.m. - 10:45 a.m.</td>
                                                        <td>Navigate The Way</td>
                                                    </tr>
                                                    <tr>
                                                        <td>11:00 a.m. - 11:45 a.m.</td>
                                                        <td>Sudoku (Round 1)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12:00 a.m. - 01:00 p.m.</td>
                                                        <td>Rubik’s Cube (Round 1)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1:00 p.m. - 2:30 p.m.</td>
                                                        <td>Lunch Break</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2:30 p.m. - 3:30 p.m.</td>
                                                        <td>Math Olympiad</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3:15 p.m. - 3:45 p.m.</td>
                                                        <td>IQ Olympiad</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4:00 p.m. - 5:30 p.m.</td>
                                                        <td>Workshop</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" rowSpan="7">Day 3</td>
                                                        <td>8:45 a.m. - 9:30 a.m.</td>
                                                        <td>Sudoku (Round 2)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9:45 a.m. -10:30 a.m.</td>
                                                        <td>Rubik’s Cube (Round 2)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10:45 a.m. - 11:45 a.m.</td>
                                                        <td>Math History Quiz</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12:00 a.m. - 01:30 a.m.</td>
                                                        <td>Math Relay</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1:30 p.m. - 3:00 p.m.</td>
                                                        <td>Lunch Break</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3:00 p.m. - 4:00 p.m.</td>
                                                        <td>(Something Surprising)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4:00 p.m. - 5:00 p.m.</td>
                                                        <td>Prize Giving Ceremony</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <h3 className="mt-4 mb-4 text-center smargin" id="contacts">
                                        <span>&mdash; </span> Contacts <span> &mdash;</span> <br/>
                                    </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-info moneywhere">
                                                <h2><span>&mdash; </span>Organizers</h2>
                                                <h4><span>&#x25cf; </span> Arpon Krishna Roy: 01780-492041</h4>
                                                <h4><span>&#x25cf; </span> GM Shoyeb Rahman: 01797-044896</h4>
                                                <h4><span>&#x25cf; </span> Shoumik Kumar: 01777-918336</h4>
                                                <h4><span>&#x25cf; </span> Irfan Sadiq: 01884-695258</h4>
                                                <h4><span>&#x25cf; </span> Reasat Prottoy: 01976-205878</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-info moneywhere">
                                                <h2><span>&mdash; </span>Executives</h2>
                                                <h4><span>&#x25cf; </span> Sharif Bin Haque (General Secretary): 01675406160</h4>
                                                <h4><span>&#x25cf; </span> Mehedi Hassan (President - Admin): 01862207756</h4>
                                                <h4><span>&#x25cf; </span> Saom Bin Khaled (President - IT): 01818422655</h4>
                                                <h4><span>&#x25cf; </span> Nadiruzzaman Naef (President - PR): 01816513721</h4>
                                                <h4><span>&#x25cf; </span> Farhan Mahtab (VP - PR): 01639573866</h4>
                                            </div>
                                        </div>
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
