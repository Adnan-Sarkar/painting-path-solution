import React from "react";
import "./AboutUs.css";
import about2 from "../../images/about-2.jpg";

const AboutUs = () => {
    return (
        <section className="pb-5 mb-5">
            <div className="container">
                <div className="tittle mb-5">
                    <h2 className="about">About Us</h2>
                    <div className="tittle-description">
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image mb-5">
                            <img
                                className="img-fluid image-2"
                                src={about2}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-content">
                            <h5>Dedicated Team</h5>
                            <h3>We Are Dedicated In Our Work!</h3>
                            <p>
                                For people like me, book are something solid and
                                real, whereas digital stuff is a bit more
                                ethereal. I like the trophy on my shelf, the
                                presence in my home. A nice book is just as
                                valuable. Let's face it, a hell of a lot more
                                useful. For people like me, book are something
                                solid and real where digital stuff is a bit more
                                ethereal. For people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
