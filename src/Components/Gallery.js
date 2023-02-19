import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-autoplay.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import justifiedGallery from "justifiedGallery";
import $ from "jquery";

const Gallery = () => {
    const images = [...Array(8).keys()].map((idx) => (
        <a
            tabIndex="-1"
            className="gallery-item"
            data-src={
                `${process.env.PUBLIC_URL}/assets/img/gallery/` + idx + ".jpg"
            }
            key={idx}
        >
            <img
                className="img-responsive"
                src={
                    `${process.env.PUBLIC_URL}/assets/img/gallery/` +
                    idx +
                    ".jpg"
                }
            />
        </a>
    ));

    useEffect(() => {
        document.title = "Gallery - Notre Dame Math Club";
        $(".gallery-container").justifiedGallery({
            captions: false,
            rowHeight: 180,
            margins: 5,
        });
        // .on("jg.complete", function () {
        //     lightGallery(
        //         document.getElementById("animated-thumbnails-gallery"), {
        //             autoplayFirstVideo: false,
        //             pager: false,
        //             download: false,
        //             slideShowInterval: 3000,
        //             galleryId: "ndmc_gallery",
        //             plugins: [lgZoom, lgAutoplay],
        //             mobileSettings: {
        //                 controls: false,
        //                 showCloseIcon: true,
        //                 download: false,
        //                 rotate: false
        //             }
        //         }
        //     );
        // });
    }, []);
    return (
        <div>
            <section className="sec_tit">
                <div className="header">
                    <h1 className="ektuUpore">GALLERY</h1>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link tabIndex="-1" to="../">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Gallery
                    </li>
                </ol>
            </section>

            <div className="container-fluid">
                <section
                    id="gallery"
                    className="gallery_section row d-flex justify-content-center"
                >
                    <div className="content row">
                        <div className="col-md-12">
                            <div className="container-sm">
                                <div className="row justify-content-center">
                                    <div className="col col-md-10">
                                        <LightGallery
                                            autoplayFirstVideo={false}
                                            pager={false}
                                            download={false}
                                            galleryId="ndmc_gallery"
                                            plugins={[lgZoom, lgAutoplay]}
                                            elementClassNames="gallery-container"
                                        >
                                            {images}
                                        </LightGallery>
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

export default Gallery;
