import React, {Fragment} from 'react';
import BannerTop from "./BannerTop";

export default class Services extends React.Component{
    render() {
        let firstBackgroundImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        };
        return(
            <Fragment>

                <BannerTop backgroundImage={firstBackgroundImage} bannerText={'Services'}/>

                <div className="site-section first-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12 text-center" data-aos="fade">
                                <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                                <h2 className="site-section-heading text-uppercase text-center font-secondary">Services</h2>
                            </div>
                        </div>
                        <div className="row border-responsive">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up"
                                 data-aos-delay="">
                                <div className="text-center">
                                    <span className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary"/>
                                    <h3 className="text-uppercase h4 mb-3">Increase Revenue</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="text-center">
                                    <span className="flaticon-bar-chart display-4 d-block mb-3 text-primary"/>
                                    <h3 className="text-uppercase h4 mb-3">Analytics</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="text-center">
                                    <span className="flaticon-medal display-4 d-block mb-3 text-primary"/>
                                    <h3 className="text-uppercase h4 mb-3">3 Years Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up"
                                 data-aos-delay="">
                                <div className="text-center">
                                    <span className="flaticon-box display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">Free Package</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="text-center">
                                    <span className="flaticon-medal display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">3 Years Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
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
