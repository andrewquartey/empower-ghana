import React, { Component } from 'react';

class Mahama extends Component {
    render() {
        return (
            <section className="partner-area-four">
                <div className="container">
                    <div className="quote">
                        <div className="testimonial-quote group right">
                            <img src={require('../../images/mahama.jpg')} />
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

                        <hr style={{ margin: '60px auto', opacity: '.0' }} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Mahama;
