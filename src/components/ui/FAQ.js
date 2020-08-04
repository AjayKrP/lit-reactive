import React, {Fragment} from 'react';
import BannerTop from "./BannerTop";

export default class FAQ extends React.Component{
    render() {
        let backgroundFirstImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        };
        return(
            <Fragment>
                <BannerTop backgroundImage={backgroundFirstImage} bannerText={'Frequently Ask Questions'}/>

                <div className="pb-3 site-section first-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12" data-aos="fade">
                                <h2 className="site-section-heading text-center text-uppercase">Frequently Ask
                                    Questions</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> Where to find your company?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> How much is the charge?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> Who is the author of this template?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> Is it free?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> Where to find your company?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> How much is the charge?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> Who is the author of this template?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span
                                    className="icon-question"></span></span> Is it free?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt, laborum.
                                    Rem praesentium, necessitatibus obcaecati quas, aliquam quasi fugiat quod impedit
                                    dolorem itaque quis ab sed quibusdam, voluptatibus autem repudiandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
