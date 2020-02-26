import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SeoSection from './SeoSection';

class NavbarEight extends Component {
    state = {
        collapsed: true
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId.classList.add('is-sticky');
            } else {
                elementId.classList.remove('is-sticky');
            }
        });
        window.scrollTo(0, 0);

        this.menuActiveClass();
    }

    menuActiveClass = () => {
        let mainNavLinks = document.querySelectorAll('nav ul li a');
        window.addEventListener('scroll', () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach(link => {
                if (link.hash) {
                    let section = document.querySelector(link.hash);
                    // console.log(link, section);
                    if (
                        section &&
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
        });
    };

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed
            ? 'navbar-toggler navbar-toggler-right collapsed'
            : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
                <SeoSection
                    title="Empower Ghana"
                    desc="Genial is a React Next Landing Templates. This has been built with React, Next.js, Express.js, and ES6+."
                    url="https://genial-react.envytheme.com/payment-processing"
                />
                <nav
                    id="navbar"
                    className="navbar navbar-expand-lg navbar-style-five navbar-light bg-light"
                >
                    <div className="container">
                        <Link href="/payment-processing">
                            <a className="navbar-brand">
                                <img src={require('/images/empowerghana-logo.jpg')} alt="logo" />
                            </a>
                        </Link>

                        <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a offset={() => 100} className="nav-link active" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a offset={() => 0} className="nav-link" href="/about">
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a offset={() => 0} className="nav-link" href="/gallery">
                                        Gallery
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a offset={() => 0} className="nav-link" href="/events">
                                        News & Events
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        onClick={this.toggleNavbar}
                                        offset={() => -10}
                                        className="nav-link"
                                        href="/#contact"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>

                            <ul className="others-option">
                                <li>
                                    <a href="/volunteer" className="btn btn-primary">
                                        Volunteer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavbarEight;
