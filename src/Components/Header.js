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
        // document load event
        $(document).ready(() => {
            if(pathname.includes('events') || pathname.includes('register')) {
                $('.upEventModal').css({
                    'display' : 'none',
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
    
    $('#closeUpEvent').click(() => {
        $('.upEventModal').css({
            'display' : 'none',
        });
    });

    $(document).click((e) => {
        if((e.target.className !== 'upEventModal') && ($('.upEventModal').css('display') !== 'none')){
            $('.upEventModal').css({
                'display' : 'none',
            });
        }
    });
    return (
        <div>
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
        <div className="upEventModal">
                <div className="D1">
                    <div className="card upcoming">
                        <i className="fa-thin fa-xmark" id="closeUpEvent"></i>
                        <div className="upcom">Upcoming</div>
                        <img
                            src="assets/img/events/3rdNDMC2023.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fa-regular fa-calendar"></i>
                                02-04 MAR 2023
                            </h5>
                            <p className="card-text">
                                3rd Annual Notre Dame Math Festival 2023
                            </p>
                            <Link
                                tabIndex="-1"
                                to="../register"
                                rel="noreferrer"
                                className="cstbtn upcoming"
                            >
                                Register{" "}
                                <i className="fa-thin fa-arrow-up-right-from-square"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
