import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div id="home" className="payment-processing-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 p-0">
                            {/* <div className="payment-processing-banner-content">
                                <h1>The new standard in online payments</h1>
                                <p>
                                    It should be noted that although application software is thought
                                    of as a program, it can be anything that runs on a computer.
                                </p>

                                <ul>
                                    <li>All popular payment methods</li>
                                    <li>Payments around the world</li>
                                    <li>In-depth data insights</li>
                                </ul>

                                <a href="#" className="btn btn-primary">
                                    Get Started!
                                </a>
                            </div> */}
                        </div>

                        <div className="col-12 p-0">
                            <div
                                style={{
                                    background: `url('../../images/banner.jpg')`,
                                    backgroundSize: 'cover',
                                    height: '650px'
                                }}
                            >
                                {/* <div className="payment-processing-banner-image">
                                <img src={require('../../images/banner.jpg')} alt="image" />
                            </div> */}
                                <div className="banner-text">
                                    <h1 style={{ color: 'white' }}>
                                        Empowering Ghana Through the SDGs
                                    </h1>
                                    <p
                                        style={{
                                            color: '#fef',
                                            position: 'absolute',
                                            left: '50%',
                                            transform: `translate(-50%, -50%)`
                                        }}
                                    >
                                        {' '}
                                        The new standard in online payments
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
