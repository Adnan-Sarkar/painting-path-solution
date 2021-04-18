import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OurBrand from "../OurBrand/OurBrand";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import TotalServices from "../TotalServices/TotalServices";
import "./Home.css";


const Home = () => {
    return (
        <main id="main">
            <Banner />
            <Services />
            <OurBrand />
            <Testimonials />
            <TotalServices />
            <AboutUs />
        </main>
    );
};

export default Home;
