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
                                    <p>
                                        Throughout our school years, we have served as leaders. We
                                        have mentored and advised students and their leaders. We
                                        have studied and researched on what make a great society
                                        over the years and we have also engaged in community
                                        leadership. And on the job, we have successfully played
                                        several leadership roles. One key outcome of these varied
                                        personal experiences is the establishment of this
                                        organization, iLEAD International.”
                                    </p>
                                </blockquote>
                                <cite>
                                    <span>Enoch Acheampong</span>
                                    <br />
                                    Co-founder, iLEAD International
                                    <br />
                                    Ghana
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
