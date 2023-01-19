import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ExecutivesJSON from "./../data/executives.json";

const FormerExectuives = () => {
	useEffect(() => { 
		document.title = "Former executives - Notre Dame Math Club";
	},[]);
    return (
        <div>
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">EXECUTIVES</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Executives
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Former
                    </li>
                </ol>
            </section>

            <div className="container-fluid">
                <section
                    id="executives"
                    className="executives_section row d-flex justify-content-center"
                >
                    {
                        ExecutivesJSON && ExecutivesJSON.slice(0,-1).reverse().map((batch,idx) => {
                            return (
                                <div key={idx} className="content row">
                                    <div className="col-md-12">
                                        <div className="exec-batch">
                                            <h4>
                                                {batch.session}
                                                <span>-</span>
                                                {parseInt(batch.session) + 1}
                                            </h4>
                                           </div>
                                        <div className="mwt row">
                                            {
                                                batch.executives.map((exec, idx) => {
                                                    let execInfo = exec.split(";");
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="col-lg-3 col-md-6 col-sm-6"
                                                            data-aos="zoom-in-up"
                                                        >
                                                            <div className="exec-prof">
                                                                <div className="exec-img">
                                                                    <img
                                                                        src={
                                                                            "../assets/img/executives/former/"+ execInfo[2] +".jpg"
                                                                        }
                                                                        onError={({ currentTarget }) => {
                                                                            currentTarget.onerror = null;
                                                                            currentTarget.src="../assets/img/executives/def.jpg";
                                                                        }}
                                                                        width="100%"
                                                                        alt="executive"
                                                                        loading="lazy"
                                                                        className="lazydumb"
                                                                    />
                                                                </div>
                                                                <div className="exec-info">
                                                                    <a
                                                                        tabIndex="-1"
                                                                        rel="noreferrer"
                                                                        // href=""
                                                                        target="_blank"
                                                                    >
                                                                        <h3>{execInfo[2]}</h3>
                                                                    </a>
                                                                    <p>{execInfo[1]==""? execInfo[0] + execInfo[1] : execInfo[0] + ", Dept. of " + execInfo[1]}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className="splash1 splash"></div>
                    <div className="splash2 splash"></div>
                </section>
            </div>
        </div>
    );
};

export default FormerExectuives;
