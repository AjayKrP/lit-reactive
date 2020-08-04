import React, {Fragment} from 'react';
import BannerTop from "./BannerTop";

export default class Contact extends React.Component{

    render() {
        let backgroundFirstImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        }
        return(
            <Fragment>
                <BannerTop backgroundImage={backgroundFirstImage} bannerText={'Contact Us'}/>

                <div className="site-section first-section" data-aos="fade">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5">
                                <form action="#" className="p-5 bg-white">
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="font-weight-bold" htmlFor="fullname">Full Name</label>
                                            <input type="text" id="fullname" className="form-control"
                                                   placeholder="Full Name"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="email">Email</label>
                                            <input type="email" id="email" className="form-control"
                                                   placeholder="Email Address"/>
                                        </div>
                                    </div>


                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="font-weight-bold" htmlFor="phone">Phone</label>
                                            <input type="text" id="phone" className="form-control"
                                                   placeholder="Phone #"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="5"
                                                      className="form-control" placeholder="Say hello to us"></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="Send Message"
                                                   className="btn btn-primary text-white px-4 py-2"/>
                                        </div>
                                    </div>


                                </form>
                            </div>

                            <div className="col-lg-4">
                                <div className="p-4 mb-3 bg-white">
                                    <h3 className="h5 text-black mb-3">Contact Info</h3>
                                    <p className="mb-0 font-weight-bold">Address</p>
                                    <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                                    <p className="mb-0 font-weight-bold">Phone</p>
                                    <p className="mb-4"><a href="#">+1 232 3235 324</a></p>

                                    <p className="mb-0 font-weight-bold">Email Address</p>
                                    <p className="mb-0"><a href="#">youremail@domain.com</a></p>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-dark block-14 nav-direction-white">

                    <div className="container">

                        <div className="row mb-5">
                            <div className="col-md-12">
                                <h2 className="site-section-heading text-center text-white text-uppercase">Testimonials</h2>
                            </div>
                        </div>

                        <div className="nonloop-block-14 owl-carousel">


                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_1.jpg" alt="Image"
                                         className="img-fluid rounded-circle w-25 mx-auto"/>
                                </div>
                                <div>
                                    <h2 className="h5 mb- text-white4 text-white">Katie Johnson</h2>
                                    <blockquote className="text-white">&ldquo;Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate
                                        aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_2.jpg" alt="Image"
                                         className="img-fluid rounded-circle w-25 mx-auto"/>
                                </div>
                                <div>
                                    <h2 className="h5 mb-4 text-white">Jun Mars</h2>
                                    <blockquote className="text-white">&ldquo;Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate
                                        aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_3.jpg" alt="Image"
                                         className="img-fluid rounded-circle w-25 mx-auto"/>
                                </div>
                                <div>
                                    <h2 className="h5 mb-4 text-white">Shane Holmes</h2>
                                    <blockquote className="text-white">&ldquo;Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate
                                        aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>

                            <div className="d-block block-testimony mx-auto text-center">
                                <div className="person w-25 mx-auto mb-4">
                                    <img src="images/person_4.jpg" alt="Image"
                                         className="img-fluid rounded-circle w-25 mx-auto"/>
                                </div>
                                <div>
                                    <h2 className="h5 mb-4 text-white">Mark Johnson</h2>
                                    <blockquote className="text-white">&ldquo;Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate
                                        aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
