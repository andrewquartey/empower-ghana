import React from 'react';

import NavbarEight from '../components/Layouts/NavbarEight';
import Footer from '../components/PaymentProcessing/Footer';
import AboutBanner from '../components/About/AboutBanner';

const About = () => {
    return (
        <React.Fragment>
            <NavbarEight />
            <AboutBanner />
            <Footer />
        </React.Fragment>
    );
};

export default About;
