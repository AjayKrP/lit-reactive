import React, {Fragment} from "react";
import BannerTop from "./BannerTop";

export default class Testimonials extends React.Component{
    render() {
        let firstBackgroundImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        };
        return(
            <Fragment>
                <BannerTop backgroundImage={firstBackgroundImage} bannerText={'Testimonials'}/>

                <div className="site-section first-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12 text-center">
                                <span
                                    className="caption d-block mb-2 font-secondary font-weight-bold">Testimonials</span>
                                <h2 className="site-section-heading text-uppercase text-center font-secondary">Happy
                                    Customers</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 mb-4">
                                <div className="d-block block-testimony mx-auto text-center">
                                    <div className="person w-25 mx-auto mb-4">
                                        <img src="images/person_1.jpg" alt="Image"
                                             className="img-fluid rounded-circle w-50 mx-auto"/>
                                    </div>
                                    <div>
                                        <h2 className="h5 mb-4">Katie Johnson</h2>
                                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit
                                            nostrum tempora ipsam!&rdquo;</blockquote>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-6 col-lg-6 mb-4">
                                <div className="d-block block-testimony mx-auto text-center">
                                    <div className="person w-25 mx-auto mb-4">
                                        <img src="images/person_2.jpg" alt="Image"
                                             className="img-fluid rounded-circle w-50 mx-auto"/>
                                    </div>
                                    <div>
                                        <h2 className="h5 mb-4">Jun Mars</h2>
                                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit
                                            nostrum tempora ipsam!&rdquo;</blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-4">


                                <div className="d-block block-testimony mx-auto text-center">
                                    <div className="person w-25 mx-auto mb-4">
                                        <img src="images/person_3.jpg" alt="Image"
                                             className="img-fluid rounded-circle w-50 mx-auto"/>
                                    </div>
                                    <div>
                                        <h2 className="h5 mb-4">Shane Holmes</h2>
                                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit
                                            nostrum tempora ipsam!&rdquo;</blockquote>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-lg-6 mb-4">
                                <div className="d-block block-testimony mx-auto text-center">
                                    <div className="person w-25 mx-auto mb-4">
                                        <img src="images/person_4.jpg" alt="Image"
                                             className="img-fluid rounded-circle w-50 mx-auto"/>
                                    </div>
                                    <div>
                                        <h2 className="h5 mb-4">Mark Johnson</h2>
                                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit
                                            nostrum tempora ipsam!&rdquo;</blockquote>
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
