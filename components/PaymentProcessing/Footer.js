import React, { Component } from 'react';
import { getCurrentYear } from '../../utils/helpers';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area-four">
                <div className="container">
                    <div className="row foot-align">
                        <div className="col-lg-3 col-sm-6 col-xm-12">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img
                                            src={require('../../images/empowerghana-logo.jpg')}
                                            alt="logo"
                                        />
                                    </a>
                                </div>

                                <ul className="contact-info">
                                    <li>C6 North Ofankor Hills Estates, Pokuase, Ghana.</li>
                                    <li>
                                        <a href="#">(224) 228-8475</a>
                                    </li>
                                    <li>
                                        <a href="#">info@empowerghana.org</a>
                                    </li>
                                    <li>
                                        <a href="#">www.empowerghana.org</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-xm-12">
                            <div className="single-footer-widget pl-3">
                                <h3>Quick Links</h3>

                                <ul className="list">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-xm-12">
                            <div className="single-footer-widget">
                                <h3>Affiliations</h3>

                                <ul className="list">
                                    <li>
                                        <a href="#">iLEAD International</a>
                                    </li>
                                    <li>
                                        <a href="#">Team</a>
                                    </li>
                                    <li>
                                        <a href="#">Volunteers</a>
                                    </li>
                                    <li>
                                        <a href="#">Join Us</a>
                                    </li>
                                    {/* <li>
                                        <a href="#">Support Center</a>
                                    </li>
                                    <li>
                                        <a href="#">Account Security</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-xm-12">
                            <div className="single-footer-widget pl-5">
                                <h3>Legal</h3>

                                <ul className="list">
                                    {/* <li>
                                        <a href="#">Quick Support</a>
                                    </li> */}
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Copyright</a>
                                    </li>
                                    <li>
                                        <a href="#">GDPR</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <p>
                                    <i className="far fa-copyright"></i> {getCurrentYear()}{' '}
                                    <a href="/">Genial</a>. All Rights Reserved
                                </p>
                            </div>

                            <div className="col-lg-5 col-md-5">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
