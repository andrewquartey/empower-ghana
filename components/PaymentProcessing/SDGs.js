import React, { Component } from 'react';

class SDGs extends Component {
    render() {
        return (
            <section
                id="about"
                className="about-area ptb-100"
                style={{ backgroundColor: '#222a66' }}
            >
                <div className="container-fluid">
                    <div className="row align-items-center sdg-pad">
                        <div className="col-lg-3 col-xm-12">
                            <div className="about-image">
                                <img src={require('/images/sdg1.png')} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-xm-12">
                            <div className="about-content">
                                <h2 className="white">Goal 1: No Poverty</h2>
                                <p style={{ color: '#e3e3e3' }}>
                                    All forms of poverty can be ended by encouraging the private
                                    sector to become a part of the creation of economic
                                    opportunities for the poor and needy and also advising young
                                    people to learn a trade or skill, get an education, and saving
                                    for a start-up business.
                                </p>
                            </div>
                        </div>

                        {/* <div className="circle">
                            <img src={require('/images/circle.png')} alt="cricle" />{' '}
                        </div> */}
                        <div className="col-lg-3 col-xm-12">
                            <div className="about-image">
                                <img src={require('/images/sdg2.png')} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-xm-12">
                            <div className="about-content">
                                <h2 className="white">Goal 2: Zero Hunger</h2>
                                <p style={{ color: '#e3e3e3' }}>
                                    We can end hunger by providing food security, better nutrition,
                                    supporting sustainable agriculture and preserving land for
                                    farming. We will uproot all barriers to sustainable development
                                    by achieving the SDGs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="spacer"></div>

                    <div className="row align-items-center sdg-pad">
                        <div className="col-lg-3 col-xm-12">
                            <div className="about-image">
                                <img src={require('/images/sdg3.png')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-xm-12">
                            <div className="about-content">
                                <h2 className="white">Goal 3: Good Health & Wellbeing</h2>
                                <p style={{ color: '#e3e3e3' }}>
                                    Our health and well-being should always be a major priority
                                    because the truth is that we need strength to be able to achieve
                                    the SDGs. Promoting quality health care is sure to improve our
                                    health and well-being.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xm-12">
                            <div className="about-image">
                                <img src={require('/images/sdg4.png')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-xm-12">
                            <div className="about-content">
                                <h2 className="white">Goal 4: Quality Education</h2>
                                <p style={{ color: '#e3e3e3' }}>
                                    Unlimited access to quality education and learning diminishes
                                    all types of inequalities including gender equality,
                                    discrimination, breaks the poverty cycle and empower people.
                                    Education is a major key to achieving other SDGs. This can be
                                    attained through the investment of educational resources and
                                    facilities.
                                </p>
                            </div>
                        </div>
                        {/* // <div className="circle">
                        //     <img src={require('/images/circle.png')} alt="cricle" />
                        // </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default SDGs;
