import React, { Component } from 'react';

class HowWorks extends Component {
    render() {
        return (
            <section id="how-it-works" className="how-it-works ptb-100">
                <div className="container">
                    <div className="payment-processing-section-title">
                        <h2>Who We Are</h2>
                        <p>
                            Empower Ghana is an initiative under the Institute for Leaders Education
                            and Development (iLEAD) International. It has a team headed by a
                            programmes coordinator who together with his team runs SDGs clubs among
                            young people in Ghana. The Empower Ghana leadership programme
                            coordinating team has a 10-year mandate to ensure that every child,
                            every teen, every youth in Ghana is empowered to live confidently
                            through the achievement of the SDGs by 2030.
                        </p>
                    </div>

                    <div
                        className="payment-processing-section-title"
                        // style={{ borderTop: '1px solid black ' }}
                    >
                        <h2>Club Routes</h2>
                        <p>
                            There are three routes of the school clubs where interested members and
                            volunteers can join:
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-process">
                                <span>.01</span>
                                <h3>Brain Boxes</h3>
                                <p>
                                    The club members organise SDGs quiz competitions and current
                                    global affairs.{' '}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-work-process">
                                <span>.02</span>
                                <h3>Leadership of Nations League</h3>
                                <p>
                                    A literary and debate platform for High School Students where
                                    they engage their minds through debate on topics obtained from
                                    the 17 SDGs.{' '}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-work-process">
                                <span>.03</span>
                                <h3>Global Goals Ambassadors</h3>
                                <p>
                                    They are selected through a rigorous selection process.
                                    Requirements for selection is Senior High School leadership
                                    experience
                                    {/* experience. For example, a prefect of a high school, an
                                    executive member of the Student Representative Council and
                                    Regional and National positions of leadership.{' '} */}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="alert-info-box">
                        <a href="#">
                            Learn more about us, on the iLEAD International website
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowWorks;
