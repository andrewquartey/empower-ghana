import React from 'react';

import NavbarEight from '../components/Layouts/NavbarEight';
import Footer from '../components/PaymentProcessing/Footer';
import GalleryBanner from '../components/Gallery/GalleryBanner';

const Gallery = () => {
    return (
        <React.Fragment>
            <NavbarEight />
            <GalleryBanner />
            <Footer />
        </React.Fragment>
    );
};

export default Gallery;
