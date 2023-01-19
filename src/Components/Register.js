import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

    const notify = () => toast.success('Thank you for registering!', {
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
        // emailjs.sendForm(
        //     "service_6r11ebm",
        //     "template_g5uht89",
        //     form.current,
        //     "Hb4wfpq3cbPhtapl1"
        // );
        document.getElementById("reg-form").reset();
        notify();
    };

    function success() {
        var subbtn = document.getElementById("subbtn"); 
        subbtn.innerHTML = "Registered";
        subbtn.style.opacity = "0.5";
        subbtn.style.transition = "all 0.5s ease-in-out";
        var name = document.getElementsByName("name")[0].value;
        var roll = document.getElementsByName("roll")[0].value;
        var contact = document.getElementsByName("contact")[0].value;
        var gcontact = document.getElementsByName("gcontact")[0].value;
        var email = document.getElementsByName("email")[0].value;
        var address = document.getElementsByName("address")[0].value;
        var school = document.getElementsByName("school")[0].value;
        var image = document.getElementsByName("image")[0].value;
        var interest = document.getElementsByName("interest")[0].value;
        var experience = document.getElementsByName("experience")[0].value;

        var data = {
            name: name,
            roll: roll,
            contact: contact,
            gcontact: gcontact,
            email: email,
            address: address,
            school: school,
            image: image,
            interest: interest,
            experience: experience
        };
        console.log(data);

        notify();

        setTimeout(function() {
            alert("Thank you for registering. We will contact you soon.");
            document.getElementById("mem_form").reset();
            subbtn.innerHTML = "Register";
            subbtn.style.opacity = "1";
        }, 1000);
        return false;
    }        
    useEffect(() => {
        document.title = "Register - Notre Dame Math Club";
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
                <section className="row d-flex justify-content-center">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                <div className="col-md-12 col-sm-12" data-aos="zoom-in-up">
                                    <div className="reg-form" data-aos="fade-up">
                                    <form id="mem_form" action="" method="POST" onSubmit={() => success()}>
                                        <div className="moneywhere">
                                            <h4><span>&#x25cf;</span> Before filling out the form kindly complete you payment</h4>
                                            <h4><span>&#x25cf; <span>Payment Method: </span></span> bKash / Rocket / Nagad</h4>
                                            <h4><span>&#x25cf; <span>Type: </span></span> Send Money</h4>
                                            <h4><span>&#x25cf; <span>Amount: </span></span> 200 BDT</h4>
                                            <h4><span>&#x25cf; <span>Numbers: </span></span> bKash &mdash; <span>01931093092</span>, Rocket &mdash; <span>019310930925</span>, Nagad &mdash; <span>01911958720</span></h4>
                                        </div>
                                    <div className="col-md-12">
                                        <div className="row contform">
                                        <div className="col-md-6">
                                            <input type="text" name="name" placeholder="Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="phone" placeholder="Contact Number" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="institutiom" placeholder="Institution" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="class" placeholder="Class" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="roll" placeholder="Roll" required />
                                        </div>
                                        
                                        <div className="col-md-12 text-center">
                                            <label>
                                            <input type="radio" name="solo_or_team" value="solo" required />
                                            <span>Solo</span>
                                            </label>
                                            <label>
                                            <input type="radio" name="solo_or_team" value="team" required/>
                                            <span>Team</span>
                                            </label>
                                        </div>
                                        
                                            <h3>Team Member 1</h3>
                                            <div className="col-md-6">
                                                <input type="text" name="tm_1_name" placeholder="Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="tm_1_email" placeholder="Email" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="number" name="tm_1_phone" placeholder="Contact Number" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="tm_1_institutiom" placeholder="Institution" required />
                                            </div>
                                            <h3>Team Member 2</h3>
                                            <div className="col-md-6">
                                                <input type="text" name="tm_2_name" placeholder="Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="tm_2_email" placeholder="Email" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="number" name="tm_2_phone" placeholder="Contact Number" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="tm_2_institutiom" placeholder="Institution" required />
                                            </div>
                                            <h3>Team Member 3</h3>
                                            <div className="col-md-6">
                                                <input type="text" name="tm_3_name" placeholder="Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="tm_3_email" placeholder="Email" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="number" name="tm_3_phone" placeholder="Contact Number" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="tm_3_institutiom" placeholder="Institution" required />
                                            </div>
                                            <div className="col-md-12 d-flex align-items-center justify-content-center">
                                                <hr width="15%" size="1" color="#fff"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="trnxID" placeholder="Transaction ID" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="number" name="money_sending_number" placeholder="Money Sending Number" required />
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" id="subbtn">
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

export default Register;
