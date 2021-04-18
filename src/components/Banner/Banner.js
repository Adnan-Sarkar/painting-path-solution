import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 m-auto banner-col">
                        <div className="banner-content text-center">
                            <h1>
                                Paint Your <span>Home</span> Like Your{" "}
                                <span>Dream</span>
                            </h1>
                            <div className="brand-description">
                                <p>
                                    The company will seek to provide its
                                    painting services in the most timely manner
                                    and with an ongoing comprehensive
                                    quality-control program to provide 100%
                                    customer satisfaction. The company’s
                                    principal officers see each contract as an
                                    agreement not between a business and its
                                    customers, but between partners that wish to
                                    create a close and mutually-beneficial
                                    long-term relationship. This will help to
                                    provide greater long-term profits through
                                    referrals and repeat business.
                                </p>
                            </div>
                            <button className="btn btn-warning btn-lg">
                                Get Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
