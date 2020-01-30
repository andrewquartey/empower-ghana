import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section
                    id="features"
                    className="payment-processing-features ptb-100"
                    style={{ backgroundColor: '#2f9b48' }}
                >
                    <div className="container" style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '1.5em', color: 'white' }}>
                            SDGs is the change we have to create now. United we stand to work
                            diligently to the fulfil lment of the SDGs for sustainable development.
                            The change we choose to create (whether positive or negative) determines
                            our future a nd the fut ure of the nation. Let us choose to journey on
                            the path of positive, effective change today , so our tomorrow may be
                            secured and guaranteed
                        </p>

                        {/* <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-search-dollar"></i>
                                    <h3>Advanced Fraud Detection</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fab fa-shirtsinbulk"></i>
                                    <h3>Customer Information Manager</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-money-check"></i>
                                    <h3>Payment Types</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-user-circle"></i>
                                    <h3>Account Updater</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-file-invoice-dollar"></i>
                                    <h3>Invoicing</h3>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-box">
                                    <i className="fas fa-hand-point-up"></i>
                                    <h3>Simple Checkout</h3>
                                </div>
                            </div>
                        </div>
                    */}
                    </div>
                </section>

                {/* <section className="start-now-area ptb-100 pb-0">
                    <div className="container">
                        <div className="start-now-content">
                            <span>Sell Smarter</span>
                            <h2>Accept Payments Online. Get Paid Faster.</h2>
                            <p>
                                Keep track of all your payments using our beautifully designed
                                payments dashboard. With all your payment information in one place,
                                you'll be a more organized and efficient business owner.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Start Now!
                            </a>
                        </div>

                        <div className="dashboard-image">
                            <img src={require('../../images/banner-chart-home.jpg')} alt="image" />
                        </div>
                    </div>
                </section> */}
            </React.Fragment>
        );
    }
}

export default Features;
