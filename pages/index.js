import React, { Component } from 'react';
import NavbarEight from '../components/Layouts/NavbarEight';
import Footer from '../components/PaymentProcessing/Footer';
import Banner from '../components/PaymentProcessing/Banner';
import Features from '../components/PaymentProcessing/Features';
import Message from '../components/PaymentProcessing/Message';
import Contact from '../components/Agency/Contact';
import Gandhi from '../components/PaymentProcessing/Gandhi';
import Mahama from '../components/PaymentProcessing/Mahama';
import SDGs from '../components/PaymentProcessing/SDGs';
import Magret from '../components/PaymentProcessing/Magret';
import MagretMessage from '../components/PaymentProcessing/MagretMessage';
import Enoch from '../components/PaymentProcessing/Enoch';
import EnochMessage from '../components/PaymentProcessing/EnochMessage';
import Enoch2 from '../components/PaymentProcessing/Enoch2';
import EnochMessage2 from '../components/PaymentProcessing/EnochMessage2';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarEight />
                <Banner />
                <Gandhi />
                <Features />
                <Mahama />
                <SDGs />
                <Message />
                <Magret />
                <MagretMessage />
                <Enoch />
                <EnochMessage />
                <Enoch2 />
                <EnochMessage2 />
                {/* <HowWorks />
                <NewFeatures />
                <Platform />
                <Funfact />
                <ShopOnline /> */}
                <Contact />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
