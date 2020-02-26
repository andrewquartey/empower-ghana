import React, { Component } from 'react';

class GalleryBanner extends Component {
    render() {
        return (
            <div id="home" className="payment-processing-banner">
                <div className="container-fluid">
                    <div className="row" style={{ textAlign: 'center' }}>
                        <div className="col-lg-6 col-md-12 p-0"></div>

                        <div className="col-12 p-0">
                            <div
                                style={{
                                    background: `url('/images/gallery.jpg')`,
                                    backgroundSize: 'cover',
                                    height: '650px'
                                }}
                            >
                                {/* <div className="payment-processing-banner-image">
                                <img src={require('/images/banner.jpg')} alt="image" />
                            </div> */}
                                <div className="banner-text">
                                    <h1 style={{ color: 'white', marginBottom: '10px' }}>
                                        Empowering Ghana Through the SDGs
                                    </h1>
                                    <p
                                        style={{
                                            // marginTop: '10px',
                                            color: '#d3d3d3',
                                            position: 'absolute',
                                            left: '10%'
                                            // transform: `translate(-50%, -50%)`
                                        }}
                                    >
                                        {' '}
                                        Join uswork diligently to the fulfil lment of the SDGs for
                                        sustainable development.
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

export default GalleryBanner;
