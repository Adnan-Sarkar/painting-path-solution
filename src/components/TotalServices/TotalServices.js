import React from "react";
import "./TotalServices.css";

const TotalServices = () => {
    return (
        <div className="total-service-bg">
            <div className="container">
                <div className="row total-service">
                    <div className="col-md-4">
                        <div className="total-service-content">
                            <h2>Services Complete</h2>
                            <h5>560</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="total-service-content">
                            <h2>Running Projects</h2>
                            <h5>23</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="total-service-content">
                            <h2>Satisfied Clients</h2>
                            <h5>490</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalServices;
