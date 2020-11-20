import React from 'react';

import NavbarEight from '../components/Layouts/NavbarEight';
import Footer from '../components/PaymentProcessing/Footer';
import GalleryBanner from '../components/Gallery/GalleryBanner';
import Heading from '../components/Gallery/Heading';
import ImageGallery from '../components/Gallery/ImageGallery';

const Gallery = () => {
    return (
        <React.Fragment>
            <NavbarEight path={'gallery'} />
            <GalleryBanner />
            <Heading />
            <ImageGallery />
            <Footer />
        </React.Fragment>
    );
};

export default Gallery;
