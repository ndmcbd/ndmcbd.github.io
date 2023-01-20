import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Executives = () => {
    useEffect(() => {
        document.title = "Developers - Notre Dame Math Club";
    }, []);
    return (
        <div>
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">DEVELOPERS</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Developers
                    </li>
                </ol>
            </section>

            <div className="container-fluid">
                <section>
                    <div className="mwt mbdev row">
                        <div className="col-md-6 devcen">
                            <div className="card mwtdev">
                                <div className="devbody card-body">
                                    <div className="devc row">
                                        <div className="col-md-5">
                                            <img src="./assets/img/dev/bokaif.jpg" alt="Badruddoza Kaif" className="img-fluid" />
                                        </div>
                                        <div className="col-md-7">
                                            <h3>Badruddoza Kaif</h3>
                                            <span>#12316070</span>
                                            <p>
                                                <a href="https://www.linkedin.com/in/bokaif/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                                <a href="https://www.github.com/bokaif/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 devcen">
                            <div className="card mwtdev">
                                <div className="devbody card-body">
                                    <div className="devc row">
                                        <div className="col-md-5">
                                            <img src="./assets/img/dev/soumya.jpg" alt="Soumya Mahbub" className="img-fluid" />
                                        </div>
                                        <div className="col-md-7">
                                            <h3>Soumya Mahbub</h3>
                                            <span>#12304123</span>
                                            <p>
                                                <a href="https://www.linkedin.com/in/soumyamahbub/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                                <a href="https://github.com/soumyamahbub/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Executives;
