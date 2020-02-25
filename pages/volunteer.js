import React from 'react';
import NavbarEight from '../components/Layouts/NavbarEight';
import VolunteerBanner from '../components/Volunteer/VolunteerBanner';
import Message from '../components/Volunteer/message';
import Footer from '../components/PaymentProcessing/Footer';

const Volunteer = () => {
    return (
        <React.Fragment>
            <NavbarEight />
            <VolunteerBanner />
            <Message />
            <Footer />
        </React.Fragment>
    );
};

export default Volunteer;
