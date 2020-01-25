import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

class Mahama extends Component {
    render() {
        return (
            <section className="partner-area-four">
                <div className="container">
                    <div
                        style={{
                            width: '960px',
                            margin: '0 auto',
                            paddingTop: '80px'
                        }}
                    >
                        <div className="testimonial-quote group right">
                            <img src="../../images/mahama.jpg" />
                            <div className="quote-container">
                                <div>
                                    <blockquote>
                                        <p>
                                            Our struggle to overcome poverty, disease and illiteracy
                                            is a common one whose success is dependent on the
                                            solidarity that exists between us.”
                                        </p>
                                    </blockquote>
                                    <cite>
                                        <span>His Excellency John Dramani Mahama</span>
                                        <br />
                                        Social Media Specialist
                                        <br />
                                        American College of Chest Physicians
                                    </cite>
                                </div>
                            </div>
                        </div>

                        <hr style={{ margin: '60px auto', opacity: '.5' }} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Mahama;
