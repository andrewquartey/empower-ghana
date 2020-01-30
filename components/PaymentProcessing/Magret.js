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
                    <div className="quote">
                        <div className="testimonial-quote group">
                            <img src="../../images/magret.png" />
                            <div className="quote-container">
                                <blockquote>
                                    <p>
                                        Never doubt that a small group of thoughtful committed
                                        citizens can change the world. Indeed, it’s the only thing
                                        that ever has.”
                                    </p>
                                </blockquote>
                                <cite>
                                    <span>Margaret Mead</span>
                                    {/* <br />
                                    Social Media Specialist
                                    <br />
                                    American College of Chest Physicians */}
                                </cite>
                            </div>
                        </div>
                        <hr style={{ margin: '60px auto', opacity: '.0' }} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Gandhi;
