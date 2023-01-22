import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./../firebase_setup/firebase";
import "react-toastify/dist/ReactToastify.css";

const Team = () => {
    const notify = () =>
        toast.success("Thank you for registering!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    const submitHandler = (e) => {
        e.preventDefault();
        var subbtn = document.getElementById("subbtn");
        subbtn.innerHTML = "Submitted";
        subbtn.style.opacity = "0.5";
        subbtn.style.transition = "all 0.5s ease-in-out";
        var category = document.querySelector('input[name="category"]:checked').value;
        var team_name = document.getElementsByName("team_name")[0].value;
        var name = document.getElementsByName("name")[0].value;
        var email = document.getElementsByName("email")[0].value;
        var contact = document.getElementsByName("phone")[0].value;
        var institution = document.getElementsByName("institution")[0].value;
        var classNo = document.getElementsByName("class")[0].value;
        // var roll = document.getElementsByName("roll")[0].value;
        var reference = document.getElementsByName("reference")[0].value;
        var transactionId = document.getElementsByName("trnxID")[0].value;
        var moneyNumber = document.getElementsByName("money_sending_number")[0].value;
        var tm_1_name = document.getElementsByName('tm_1_name')[0].value;
        var tm_1_email = document.getElementsByName('tm_1_email')[0].value;
        var tm_1_phone = document.getElementsByName('tm_1_phone')[0].value;
        var tm_1_institution = document.getElementsByName('tm_1_institution')[0].value;
        var tm_1_class = document.getElementsByName('tm_1_class')[0].value;
        var tm_2_name = document.getElementsByName('tm_2_name')[0].value;
        var tm_2_email = document.getElementsByName('tm_2_email')[0].value;
        var tm_2_phone = document.getElementsByName('tm_2_phone')[0].value;
        var tm_2_institution = document.getElementsByName('tm_2_institution')[0].value;
        var tm_2_class = document.getElementsByName('tm_2_class')[0].value;

        var data = {
            "Category": category,
            "Team Name": team_name,
            "Reference": reference,
            "Trx ID": transactionId,
            "Money Sending Number": moneyNumber,
            
            "Team Leader's Name": name,
            "Team Leader's Email": email,
            "Team Leader's Contact": contact,
            "Team Leader's Institution": institution,
            "Team Leader's Class ": classNo,            

            "Name 01": tm_1_name,
            "Email 01": tm_1_email,
            "Contact 01": tm_1_phone,
            "Institution 01": tm_1_institution,
            "Class 01": tm_1_class,

            "Name 02": tm_2_name,
            "Email 02": tm_2_email,
            "Contact 02": tm_2_phone,
            "Institution 02": tm_2_institution,
            "Class 02": tm_2_class,
        };
        const ref = collection(firestore, "team_participants");
        try {
            addDoc(ref, data);
        } catch (err) {
            console.log(err);
        }

        notify();

        setTimeout(function () {
            document.getElementById("mem_form").reset();
            subbtn.innerHTML = "Register";
            subbtn.style.opacity = "1";
        }, 1000);
    };

    useEffect(() => {
        document.title = "Team Registration - Notre Dame Math Club";
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
                    <li className="breadcrumb-item" aria-current="page">
                        <Link tabIndex="-1" to="../register/">
                            Register
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Team
                    </li>
                </ol>
            </section>
            <div className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                <div className="switch_reg text-center">
                                    <Link to="../register/team" className="typeact">
                                        Team
                                    </Link>
                                </div>
                                <div
                                    className="col-md-12 col-sm-12"
                                    data-aos="zoom-in-up"
                                >
                                    <div
                                        className="reg-form"
                                        data-aos="fade-up"
                                    >
                                        <form
                                            id="mem_form"
                                            action=""
                                            method="POST"
                                            onSubmit={submitHandler}
                                        >
                                            <div className="moneywhere">
                                                <h4>
                                                    <span>&#x25cf;</span> Before
                                                    filling out the form kindly
                                                    complete your payment.
                                                </h4>
                                                <h4>
                                                    <span>
                                                        &#x25cf;{" "}
                                                        <span>
                                                            Payment Method:{" "}
                                                        </span>
                                                    </span>{" "}
                                                    bKash / Rocket / Nagad
                                                </h4>
                                                <h4>
                                                    <span>
                                                        &#x25cf;{" "}
                                                        <span>Type: </span>
                                                    </span>{" "}
                                                    Send Money
                                                </h4>
                                                <h4>
                                                    <span>
                                                        &#x25cf;{" "}
                                                        <span>Amount: </span>
                                                    </span>{" "}
                                                    150 BDT (Per Team)
                                                </h4>
                                                <h4>
                                                    <span>
                                                        &#x25cf;{" "}
                                                        <span>Numbers: </span>
                                                    </span>{" "}
                                                    bKash &mdash;{" "}
                                                    <span>01748319676</span>,
                                                    Rocket &mdash;{" "}
                                                    <span>017483196766</span>,
                                                    Nagad &mdash;{" "}
                                                    <span>01911958720</span>
                                                </h4>
                                                <h4>
                                                    <span>
                                                        &#x25cf;{" "}
                                                        <span>Payment Reference Code: </span>
                                                    </span>{" "}
                                                    3ANDMF2023
                                                </h4>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="row contform">
                                                    <h3><span>&mdash; </span>Team Details</h3>
                                                    <div className="col-md-6 text-center">
                                                        <label>
                                                            <input type="radio" id="junior" name="category" value="Junior" required />
                                                            <span>Junior</span>
                                                        </label>
                                                        <label>
                                                        <input type="radio" id="secondary" name="category" value="Secondary" required />
                                                            <span>Secondary</span>
                                                        </label>
                                                        <label>
                                                        <input type="radio" id="hsecondary" name="category" value="High School" required />
                                                            <span>High School</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="team_name"
                                                            placeholder="Team Name"
                                                            required
                                                        />
                                                    </div>
                                                    
                                                    <h3><span>&mdash; </span>Team Leader</h3>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Name"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            placeholder="Contact Number"
                                                            required
                                                            maxLength="13"
                                                            minLength="11"
                                                            pattern="8801[0-9]{9}|01[0-9]{9}"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="institution"
                                                            placeholder="Institution"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="class"
                                                            placeholder="Class"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="reference"
                                                            placeholder="Reference Code (if any)"
                                                        />
                                                    </div>

                                                    <h3><span>&mdash; </span>Team Member 1</h3>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="tm_1_name"
                                                            placeholder="Name"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="email"
                                                            name="tm_1_email"
                                                            placeholder="Email"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            name="tm_1_phone"
                                                            placeholder="Contact Number"
                                                            required
                                                            type="text"
                                                            maxLength="13"
                                                            minLength="11"
                                                            pattern="8801[0-9]{9}|01[0-9]{9}"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="tm_1_institution"
                                                            placeholder="Institution"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="tm_1_class"
                                                            placeholder="Class"
                                                            required
                                                        />
                                                    </div>
                                                    <h3><span>&mdash; </span>Team Member 2</h3>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="tm_2_name"
                                                            placeholder="Name"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="email"
                                                            name="tm_2_email"
                                                            placeholder="Email"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            name="tm_2_phone"
                                                            placeholder="Contact Number"
                                                            required
                                                            type="text"
                                                            maxLength="13"
                                                            minLength="11"
                                                            pattern="8801[0-9]{9}|01[0-9]{9}"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="tm_2_institution"
                                                            placeholder="Institution"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="tm_2_class"
                                                            placeholder="Class"
                                                            required
                                                        />
                                                    </div>
                                                    <h3><span>&mdash; </span>Payment Info</h3>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="trnxID"
                                                            placeholder="Transaction ID"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="number"
                                                            name="money_sending_number"
                                                            placeholder="Money Sending Number"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button
                                                            type="submit"
                                                            id="subbtn"
                                                        >
                                                            Register
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

export default Team;
