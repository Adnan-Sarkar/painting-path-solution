import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitterSquare,
    faLinkedin,
    faDribbbleSquare,
    faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <section id="footer">
            <footer id="footer">
                <div className="container">
                    <div className="row pb-5 pt-5">
                        <div className="col-md-8 m-auto">
                            <div className="subscribe-form d-flex justify-content-between align-items-center">
                                <label htmlFor="email">Subscribe Us Now</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="subscribe-email"
                                    placeholder="Enter Your Email"
                                    id="email"
                                />
                                <button className ="btn btn-success ml-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5">
                        <div className="col-lg-4">
                            <div className="footer-left-content">
                                <p>
                                    Let us together create the new building of
                                    the future which will be everything in one
                                    form: architecture and sculpture and
                                    painting. The greatest advances of
                                    civilization, whether in architecture.
                                </p>
                                <p>
                                    Painting or painting, science literature, in
                                    industry or agriculture, have never come
                                    from.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-middle-content text-center">
                                <div className="footer-content-tittle pb-3">
                                    <h4>Services</h4>
                                </div>
                                <p>Wall Painting</p>
                                <p>House Painting</p>
                                <p>Normal Painting</p>
                                <p>Interior Painting</p>
                                <p>Commercial Painting</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-middle-content text-center">
                                <div className="footer-content-tittle pb-3">
                                    <h4>Company</h4>
                                </div>
                                <p>Careers</p>
                                <p>Affiliates</p>
                                <p>About Us</p>
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-right-content">
                                <div className="footer-content-tittle pb-5">
                                    <h4>Follow Us</h4>
                                </div>
                                <div className="social-links">
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faFacebookSquare}
                                    />
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faTwitterSquare}
                                    />
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faLinkedin}
                                    />
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faDribbbleSquare}
                                    />
                                    <FontAwesomeIcon
                                        className="social-icons"
                                        icon={faPinterestSquare}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p>&copy; 2021 All Rights Reserved By <span>Adnan Sarkar</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
