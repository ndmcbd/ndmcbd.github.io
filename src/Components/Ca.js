import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { firestore } from "./../firebase_setup/firebase";
import { ToastContainer, toast } from "react-toastify";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

import { v4 as uuidv4 } from 'uuid';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import "react-toastify/dist/ReactToastify.css";

const Ca = () => {
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState("");
    const onDrop = useCallback((acceptedFiles) => {
        if ((acceptedFiles[0].size / (1024*1024)).toFixed(2) <= 1) {
            setImage(acceptedFiles[0]);
        } else {
            alert("Image size should be less than 1MB");
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });
    const notify = (txt) =>
        toast.success(txt, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    const processImageName = (image) => {
        return image.name.split('.')[0].slice(0, 10) + '...' + image.name.slice(image.name.lastIndexOf("."));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (image==="") {
            toast.error("Photo is required", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        if (image.size > 1000000) {
            toast.error("Image size should be less than 1MB", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        var subbtn = document.getElementById("subbtn");
        subbtn.innerHTML = "Please wait";
        subbtn.style.opacity = "0.5";
        subbtn.style.transition = "all 0.5s ease-in-out";
        var name = document.getElementsByName("name")[0].value;
        var email = document.getElementsByName("email")[0].value;
        var contact = document.getElementsByName("phone")[0].value;
        var institution = document.getElementsByName("institution")[0].value;
        var classNo = document.getElementsByName("class")[0].value;
        var address = document.getElementsByName("address")[0].value;
        var experience = document.getElementsByName("experience")[0].value;
        var skills = document.getElementsByName("skills")[0].value;
        var fbLink = document.getElementsByName("fbLink")[0].value;


        const uid = uuidv4();

        const storage = getStorage();
        const storageRef = ref(storage, "ca-photos/" + uid + ".jpg");
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const uploadProgress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + "%";
                    // document.getElementById("prog").innerText = uploadProgress;
                // setProgress(uploadProgress);
            },
            (error) => {
                console.log(error);
                // setProgress("");
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then(async (imageUrl) => {
                    var data = {
                        "Name": name,
                        "Email": email,
                        "Contact": contact,
                        "Institution": institution,
                        "Class": classNo,
                        "Address": address,
                        "Experience": experience,
                        "Skills": skills,
                        "Photo": imageUrl,
                        "fbLink": fbLink,
                        "Created": serverTimestamp()
                    };
                    const collectionRef = collection(
                        firestore,
                        "ca_candidates"
                    );  //Firebase creates this automatically
                    try {
                        await setDoc(doc(firestore, "ca_candidates", uid), data);
                        notify("Thank you for applying!");
                        setTimeout(function () {
                            // alert("Thank you for registering. We will contact you soon.");
                            document.getElementById("mem_form").reset();
                            setImage("");
                            subbtn.innerHTML = "Register";
                            subbtn.style.opacity = "1";
                        }, 1000);
                        // setProgress("");
                    } catch (err) {
                        console.log(err, data);
                    }
                });
            }
        );
    };

    useEffect(() => {
        document.title = "CA Registration - Notre Dame Math Club";
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
                        CA
                    </li>
                </ol>
            </section>
            <div className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="mwt row">
                                <div className="switch_reg text-center">
                                    <Link
                                        to="../register/ca"
                                        className="typeact"
                                    >
                                        Campus Ambassador
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
                                            <div className="col-md-12">
                                                <div className="row contform">
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
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            placeholder="Address"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <textarea
                                                            name="skills"
                                                            placeholder="Skills (if any)"
                                                            rows="3"
                                                            maxLength="400"
                                                        ></textarea>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <textarea
                                                            name="experience"
                                                            placeholder="Experience (if any)"
                                                            rows="3"
                                                            maxLength="400"
                                                        ></textarea>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input
                                                            type="url"
                                                            name="fbLink"
                                                            placeholder="Facebook Link"
                                                            required
                                                        />                                                        
                                                    </div>
                                                    <h3><span>&mdash; </span>Formal Photo</h3>
                                                    <div
                                                        className="col-md-12 mb-4 dragndropi"
                                                        {...getRootProps()}
                                                    >
                                                        <div>
                                                            <input {...getInputProps()}/>
                                                            {isDragActive ? (
                                                                <p>Drop your image...</p>
                                                            ) : (
                                                                <p>{image ? processImageName(image) : "Upload a Formal Photo"}</p>
                                                            )}
                                                        </div>
                                                        <p className="text-left mt-3">Note: The size of the picture must be less than 1 MB</p>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button
                                                            type="submit"
                                                            id="subbtn"
                                                        >
                                                            Register
                                                        </button>
                                                    </div>
                                                    {progress}
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

export default Ca;
