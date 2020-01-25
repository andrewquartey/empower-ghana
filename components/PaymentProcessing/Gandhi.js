import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

class Gandhi extends Component {
    state = { display: false };

    componentDidMount() {
        this.setState({ display: true });
    }

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
                        <div className="testimonial-quote group">
                            <img src="../../images/mahatma-gandhi.jpg" />
                            <div className="quote-container">
                                <blockquote>
                                    <p>We must become the change we wish to create.”</p>
                                </blockquote>
                                <cite>
                                    <span>Mahatma Gandhi</span>
                                    {/* <br />
                                    Social Media Specialist
                                    <br />
                                    American College of Chest Physicians */}
                                </cite>
                            </div>
                        </div>
                        <hr style={{ margin: '60px auto', opacity: '.5' }} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Gandhi;
