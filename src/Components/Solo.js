import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./../firebase_setup/firebase";
import "react-toastify/dist/ReactToastify.css";

const Solo = () => {
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
        var name = document.getElementsByName("name")[0].value;
        var email = document.getElementsByName("email")[0].value;
        var contact = document.getElementsByName("phone")[0].value;
        var institution = document.getElementsByName("institution")[0].value;
        var classNo = document.getElementsByName("class")[0].value;
        // var roll = document.getElementsByName("roll")[0].value;
        var reference = document.getElementsByName("reference")[0].value;
        var transactionId = document.getElementsByName("trnxID")[0].value;
        var moneyNumber = document.getElementsByName("money_sending_number")[0]
            .value;

        var data = {
            "Category": category,
            "Reference": reference,
            "Trx ID": transactionId,
            "Money Sending Number": moneyNumber,
            "Name": name,
            "Email": email,
            "Contact": contact,
            "Institution": institution,
            "Class": classNo,
        };

        const ref = collection(firestore, "solo_participants"); // Firebase creates this automatically
        try {
            addDoc(ref, data);
        } catch (err) {
            console.log(err);
        }

        notify();

        setTimeout(function () {
            // alert("Thank you for registering. We will contact you soon.");
            document.getElementById("mem_form").reset();
            subbtn.innerHTML = "Register";
            subbtn.style.opacity = "1";
        }, 1000);
    };

    useEffect(() => {
        document.title = "Solo Registration - Notre Dame Math Club";
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
                        Solo
                    </li>
                </ol>
            </section>
            <div className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                <div className="switch_reg text-center">
                                    <Link to="../register/solo" className="typeact">
                                        Solo
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
                                            onSubmit={submitHandler}
                                        >
                                            <div className="moneywhere">
                                                <h4>
                                                    <span>&#x25cf;</span> Before
                                                    filling out the form kindly
                                                    complete you payment
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
                                                    50 BDT
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
                                                <h3><span>&mdash; </span>Category</h3>
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
                                                        <input type="radio" id="hsecondary" name="category" value="H. Secondary" required />
                                                            <span>H. Secondary</span>
                                                        </label>
                                                    </div>
                                                    <h3><span>&mdash; </span>Personal Info</h3>
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
                                                    {/* <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="roll"
                                                            placeholder="Roll"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6"></div> */}
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="reference"
                                                            placeholder="Reference Code (if any)"
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
                                                            type="text"
                                                            name="money_sending_number"
                                                            placeholder="Money Sending Number"
                                                            required
                                                            maxLength="13"
                                                            minLength="11"
                                                            pattern="8801[0-9]{9}|01[0-9]{9}"
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

export default Solo;
