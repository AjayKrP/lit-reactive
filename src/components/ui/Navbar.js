import React, {Fragment} from 'react';
import Lifecycle from "react-router/modules/Lifecycle";

export default class Navbar extends React.Component{
    render() {
        let firstImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        }

        let secondImage = {
            backgroundImage: 'url(images/hero_1.jpg)'
        }

        return(
            <Fragment>
                <div className="slide-one-item home-slider owl-carousel">
                    <div className="site-blocks-cover inner-page overlay" style={firstImage}
                         data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 text-center" data-aos="fade">
                                    <h1 className="font-secondary  font-weight-bold text-uppercase">Welcome to Literacis</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-blocks-cover inner-page overlay" style={secondImage}
                         data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center" data-aos="fade">
                                    <h1 className="font-secondary font-weight-bold text-uppercase">Best Technical Learning Hub</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slant-1"></div>

                <div className="site-section first-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12 text-center" data-aos="fade">
                                <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                                <h2 className="site-section-heading text-uppercase text-center font-secondary">Love Us
                                    Colorlib</h2>
                            </div>
                        </div>
                        <div className="row border-responsive">
                            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up"
                                 data-aos-delay="">
                                <div className="text-center">
                                    <span className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">Increase Revenue</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="text-center">
                                    <span className="flaticon-bar-chart display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">Analytics</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up"
                                 data-aos-delay="200">
                                <div className="text-center">
                                    <span className="flaticon-medal display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">3 Years Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                                <div className="text-center">
                                    <span className="flaticon-box display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">Free Package</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
