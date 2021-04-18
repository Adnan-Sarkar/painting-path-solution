import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);

    return (
        <section id="services" className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tittle">
                            <h2>Our Service, Best of the Best</h2>
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
                <div className="row pb-5">
                    <div className="col text-center">
                        <p className="service-tittle">Our Services</p>
                    </div>
                </div>
                {services && services.length === 0 && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                <div className="row pb-5">
                    {services &&
                        services.map((service) => (
                            <SingleService key={service._id} service={service} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
