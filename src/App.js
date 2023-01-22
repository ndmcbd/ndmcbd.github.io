import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Publications from "./Components/Publications";
import Contact from "./Components/Contact";
import Executives from "./Components/Executives";
import { useLocation } from "react-router-dom";
import FormerExectuives from "./Components/FormerExectuives";
import Gallery from "./Components/Gallery";
import Details from "./Components/Details";
import Register from "./Components/Register";
import Solo from "./Components/Solo";
import Developers from "./Components/Developers";
import $ from 'jquery';
import Team from "./Components/Team";
import Ca from "./Components/Ca";

function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        AOS.init({
            offset: -350,
            delay: 0,
            duration: 300,
            easing: "ease-in-out",
            once: false,
            mirror: false,
            anchorPlacement: "top-center",
        });
        // $('.hamburger').click(() => {
        //     $('.goto').toggleClass('open');
        //     $('.goto li').toggleClass('fade');
        //     $('.hamburger').toggleClass('toggle');
        // });
    
        if ($('.animCounter').is(':visible')) {
            $('.animCounter').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }, []);

    useEffect(() => {
        window.scrollTo({top:0, behavior: "instant"});
      }, [pathname]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="events" element={<Events />} />
                <Route path="publications" element={<Publications />} />
                <Route path="contact" element={<Contact />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="executives" element={<Executives />} />
                <Route path="executives/former" element={<FormerExectuives />} />
                <Route path="events/3rd-annual-notre-dame-math-festival-2023" element={<Details />} />
                <Route path="register" element={<Register />} />
                <Route path="register/solo" element={<Solo />} />
                <Route path="register/team" element={<Team />} />
                <Route path="register/ca" element={<Ca />} />
                <Route path="dev" element={<Developers />} />
            </Routes>

            <Footer />

            <div id="scrollToTop" onClick={() => window.scrollTo(0, 0)}>
                <i className="fa-regular fa-chevron-up"></i>
            </div>
        </div>
    );
}

export default App;
