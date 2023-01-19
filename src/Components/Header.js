import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../img/logo.png";
import $ from 'jquery';


const Header = () => {
    const { pathname } = useLocation();
	useEffect(()=> {
		$(document).scroll(function() {
			if($(window).scrollTop() > 0) {
				$('nav').css({
					'background' : 'rgb(27, 27, 36)',
				});
				$('#scrollToTop').css({
					'visibility' : 'visible',
				});
			}
			else {
				$('nav').css({
					'background' : 'transparent'
				});
				$('#scrollToTop').css({
					'visibility' : 'hidden',
				});
			}
		});
	}, [])
    const drawerToggle = () => {
        $('.hamburger').click(() => {
            $('.goto').toggleClass('open');
            $('.goto li').toggleClass('fade');
            $('.hamburger').toggleClass('toggle');
        });
    }
    const closeDrawer = () => {
        $('.goto').removeClass('open');
        $('.goto li').removeClass('fade');
        $('.hamburger').removeClass('toggle');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a tabIndex="-1" className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="ndmc_logo"
                        width="60"
                        height="60"
                        className="d-inline-block align-text-top"
                    />
                </a>
                <div className="navr">
                    <div onClick={drawerToggle} className="hamburger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className="goto">
                        <li>
                            <Link onClick={closeDrawer} tabIndex="-1" to="" className={pathname ==="" ? "active-ul" : ""}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} tabIndex="-1" to="about" className={pathname ==="about" ? "active-ul" : ""}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} tabIndex="-1" to="events" className={pathname ==="events" ? "active-ul" : ""}>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} tabIndex="-1" to="publications" className={pathname ==="publications" ? "active-ul" : ""}>
                                Publications
                            </Link>
                        </li>
                        <li className="dropdown">
                            <a
                                tabIndex="-1"
                                className={`dropdown-toggle ${pathname ==="executives" ? "active-ul" : ""}`}
                                data-toggle="dropdown"
                            >
                                Executives
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        onClick={closeDrawer}
                                        tabIndex="-1"
                                        to="executives"
                                        className="aff"
                                    >
                                        Current
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={closeDrawer} tabIndex="-1" to="executives/former">
                                        Former
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} tabIndex="-1" to="gallery" className={pathname ==="gallery" ? "active-ul" : ""}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} tabIndex="-1" to="contact" className={pathname ==="contact" ? "active-ul" : ""}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
