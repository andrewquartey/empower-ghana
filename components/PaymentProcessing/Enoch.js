import React, { Component } from 'react';

class Enoch extends Component {
    render() {
        return (
            <section className="partner-area-four">
                <div className="container">
                    <div className="quote">
                        <div className="testimonial-quote group right">
                            <img src={require('../../images/enoch.jpg')} />
                            <div className="quote-container">
                                <div>
                                    <blockquote>
                                        <p>
                                            In a society where strong leadership and good governance
                                            exist, problems grow smaller, human lives improve
                                            significantly and communities become better. These are
                                            true because strong leadership and good governance aim
                                            at solving real life’s problems – in communities and
                                            world around – with passion and unmatched integrity.
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
                        </div>

                        <hr style={{ margin: '60px auto', opacity: '.0' }} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Enoch;
