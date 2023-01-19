import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footbord col-md-12"></div>
                    <div className="cen col-md-11 px-1">
                        <div className="row">
                            <div className="footer_text col-md-6">
                                <p>© Notre Dame Math Club</p>
                                <br />
                            </div>
                            <div className="footer_social col-md-6">
                                <ul>
                                    <li>
                                        <a tabIndex="-1" href="https://www.facebook.com/official.ndmc/">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a tabIndex="-1" href="https://t.me/ndmc_official">
                                            <i className="fab fa-telegram-plane"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link tabIndex="-1" to="dev" className="dev">
            Developers
            </Link>
        </footer>
    );
};

export default Footer;
