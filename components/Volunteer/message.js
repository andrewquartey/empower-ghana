const Message = () => {
    return (
        <section
            id="features"
            className="payment-processing-features ptb-50"
            // style={{ backgroundColor: '#2f9b48' }}
        >
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Join Us</h2>
                <p style={{ fontSize: '1.2em' }}>
                    Are you an individual with innovative, creative skills? Do you want to empower
                    the world? Do you have passion for humanitarian projects and projects towards
                    achieving the Sustainable Development Goals? Is your vision geared toward making
                    a positive change? Then, let us make a difference together. Empower Ghana can
                    ensure the fulfilment of your vision. We are searching for volunteers who would
                    like to be part of our hardworking, productive team. We need your support to
                    create a long-lasting impact across the world. Working in the capacity as a
                    volunteer includes travelling to various regions in Ghana and to countries
                    outside Ghana (other African countries, The Americas, Asia, etc.). Join our team
                    as we embark on humanitarian projects. Let’s create an impact and empower the
                    world as a team.
                </p>
            </div>
            <div></div>
            <div className="ptb-50"></div>
            <div
                className="row text-center"
                style={{ backgroundColor: '#222a66', padding: '40px 30px' }}
            >
                <div className="col-md-8 col-sm-12 volunteer-text text-right">
                    <p style={{ color: '#e3e3e3', padding: '14px 30px;', fontSize: '1.5em' }}>
                        Do you want to make a difference? Click on the the link to apply as a
                        volunteer
                    </p>
                </div>
                <div className="col-md-4 col-sm-12 volunteer-link">
                    <a href="/volunteer" className="btn btn-primary" style={{ fontSize: '1.1em' }}>
                        Fill Volunteer Form
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Message;
