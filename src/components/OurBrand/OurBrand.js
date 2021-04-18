import React from "react";
import "./OurBrand.css";
import ourBrand from "../../images/our-brand.png";
import ourBrand2 from '../../images/our-brand-2.png'

const OurBrand = () => {
    return (
        <section id="brand" className = "pb-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tittle">
                            <h2>Our Brand, Our Pride</h2>
                            <div className="tittle-description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat, modi soluta
                                    doloremque maxime a exercitationem quos
                                    neque aperiam quo explicabo, ullam nostrum
                                    tempore. Recusandae reprehenderit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row our-brand">
                    <div className="col-md-8">
                        <div className="our-brand-img">
                            <img
                                className="img-fluid w-100"
                                src={ourBrand}
                                alt="brand"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="our-brand-content">
                            <h3>Doing Painting is Our Big Passion</h3>
                            <p>
                                For people like me, book are something solid and
                                real, whereas digital stuff is a bit more
                                ethereal. I like the trophy on my shelf, the
                                presence in my home. A nice book is just as
                                valuable. Let's face it, a hell of a lot more
                                useful. For people like me, book are something
                                solid and real where digital stuff is a bit more
                                ethereal. For people like me, book are something
                                solid and.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 our-brand-2">
                    <div className="col-md-5">
                        <div className="our-brand-content">
                            <h3>Colors You Will Love And Willing To Use!</h3>
                            <p>
                                For people like me, book are something solid and
                                real, whereas digital stuff is a bit more
                                ethereal. I like the trophy on my shelf, the
                                presence in my home. A nice book is just as
                                valuable. Let's face it, a hell of a lot more
                                useful. For people like me, book are something
                                solid and real where digital stuff is a bit more
                                ethereal. For people like me, book are something
                                solid and.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="our-brand-img">
                            <img
                                className="img-fluid w-100"
                                src={ourBrand2}
                                alt="brand"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBrand;
