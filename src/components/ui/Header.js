import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export default class Home extends React.Component{
    render() {
        return(
            <Fragment>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <div className="site-navbar-wrap sticky-top js-site-navbar bg-white">
                    <div className="container">
                        <div className="site-navbar bg-light">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <h2 className="mb-0 site-logo"><a href="/"
                                                                      className="font-weight-bold text-uppercase">Neos</a>
                                    </h2>
                                </div>
                                <div className="col-10">
                                    <nav className="site-navigation text-right" role="navigation">
                                        <div className="container">
                                            <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#"
                                                                                                              className="site-menu-toggle js-menu-toggle text-black"><span
                                                className="icon-menu h3"></span></a></div>

                                            <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li className="has-children">
                                                    <Link to="/about">About</Link>
                                                    <ul className="dropdown arrow-top">
                                                        <li><Link to="/testimonials">Testimonials</Link></li>
                                                        <li><Link to="/gallery">Gallery</Link></li>
                                                        <li><Link to="/faq">FAQ</Link></li>
                                                        <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                                                        <li className="has-children">
                                                            <a href="#">Sub Menus</a>
                                                            <ul className="dropdown">
                                                                <li><Link to="/testimonials">Testimonials</Link></li>
                                                                <li><Link to="/gallery">Gallery</Link></li>
                                                                <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/services">Services</Link></li>
                                                <li><Link to="/blogs">Blog</Link></li>
                                                <li><a href="/contact">Contact</a></li>
                                                <li><Link to="/contact"><span
                                                    className="d-inline-block bg-primary text-white btn btn-primary">Get Started</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
