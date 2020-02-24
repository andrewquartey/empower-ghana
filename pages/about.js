import React from 'react';

import NavbarEight from '../components/Layouts/NavbarEight';
import Footer from '../components/PaymentProcessing/Footer';
import AboutBanner from '../components/About/AboutBanner';
import HowWorks from '../components/PaymentProcessing/HowWorks';

const About = () => {
    return (
        <React.Fragment>
            <NavbarEight />
            <AboutBanner />
            <HowWorks />

            {/* <Platform />
            <Funfact /> */}
            <Footer />
        </React.Fragment>
    );
};

export default About;
