import React, {Fragment} from "react";
import BannerTop from "./BannerTop";

export default class About extends React.Component{
    render() {
        let backgroundImages = [
            {
                backgroundImage: 'url(images/hero_2.jpg)'
            },
            {
                backgroundImage: 'url(images/img_4.jpg)'
            },
            {
                backgroundImage: 'url(images/img_5.jpg)'
            },
        ]
        return(
            <Fragment>
                <BannerTop backgroundImage={backgroundImages[0]} bannerText={'About Us'}/>

                <div className="site-half first-section">
                    <div className="img-bg-1" style={backgroundImages[1]} data-aos="fade"></div>
                    <div className="container">
                        <div className="row no-gutters align-items-stretch">
                            <div className="col-lg-5 ml-lg-auto py-5">
                                <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                                <h2 className="site-section-heading text-uppercase font-secondary mb-5">Clean
                                    Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius
                                    facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem
                                    reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora
                                    distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-half block">
                    <div className="img-bg-1 right" style={backgroundImages[3]} data-aos="fade"
                         data-aos-delay="100"></div>
                    <div className="container">
                        <div className="row no-gutters align-items-stretch">
                            <div className="col-lg-5 mr-lg-auto py-5">
                                <span className="caption d-block mb-2 font-secondary font-weight-bold">Easy To Use Templates</span>
                                <h2 className="site-section-heading text-uppercase font-secondary mb-5">Free HTML5
                                    Templates</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius
                                    facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem
                                    reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora
                                    distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12" data-aos="fade">
                                <h2 className="site-section-heading text-center text-uppercase">The Team</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="100">
                                <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded w-50 mb-4"/>
                                    <h2 className="h5 text-uppercase">Andrew Neel</h2>
                                    <span className="d-block mb-4">CEO, Co-Founder</span>
                                    <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae,
                                        voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae
                                        fugiat.</p>
                                    <p>
                                        <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                                        <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                                        <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                                        <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                                    </p>
                            </div>
                            <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                                <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded w-50 mb-4"/>
                                    <h2 className="h5 text-uppercase">Aron Knipes</h2>
                                    <span className="d-block mb-4">President, Co-Founder</span>
                                    <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae,
                                        voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae
                                        fugiat.</p>
                                    <p>
                                        <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                                        <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                                        <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                                        <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                                    </p>
                            </div>
                            <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="300">
                                <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded w-50 mb-4"/>
                                    <h2 className="h5 text-uppercase">Tim Watkins</h2>
                                    <span className="d-block mb-4">CEO, Co-Founder</span>
                                    <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae,
                                        voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae
                                        fugiat.</p>
                                    <p>
                                        <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                                        <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                                        <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                                        <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                                    </p>
                            </div>
                            <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="400">
                                <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded w-50 mb-4"/>
                                    <h2 className="h5 text-uppercase">Nicole Davis</h2>
                                    <span className="d-block mb-4">Product Manager</span>
                                    <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae,
                                        voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae
                                        fugiat.</p>
                                    <p>
                                        <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                                        <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                                        <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                                        <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section section-counter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></p>
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Free Template by
                                    Colorlib</h2>
                                <p className="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi
                                    cupiditate, mollitia. </p>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="counter">
                                            <span className="caption">Current Downloads</span>
                                            <span className="number" data-number="49020">0</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="counter">
                                            <span className="caption">Number of Templates</span>
                                            <span className="number" data-number="275">0</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
