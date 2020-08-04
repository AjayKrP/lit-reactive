import React, {Fragment} from "react";
import BannerTop from "./BannerTop";

export default class Blog extends React.Component{
    render() {
        let firstBackgroundImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        };
        return(
            <Fragment>
                <BannerTop backgroundImage={firstBackgroundImage} bannerText={'Blog Posts'}/>

                <div className="site-section first-section" data-aos="fade">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media-image">
                                    <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
                                    <div className="media-image-body">
                                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You
                                            Learn HTML & CSS in 2019?</a></h2>
                                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                                            voluptate.</p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media-image">
                                    <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
                                    <div className="media-image-body">
                                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You
                                            Learn HTML & CSS in 2019?</a></h2>
                                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                                            voluptate.</p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media-image">
                                    <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                                    <div className="media-image-body">
                                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You
                                            Learn HTML & CSS in 2019?</a></h2>
                                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                                            voluptate.</p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media-image">
                                    <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
                                    <div className="media-image-body">
                                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You
                                            Learn HTML & CSS in 2019?</a></h2>
                                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                                            voluptate.</p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media-image">
                                    <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
                                    <div className="media-image-body">
                                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You
                                            Learn HTML & CSS in 2019?</a></h2>
                                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                                            voluptate.</p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="media-image">
                                    <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                                    <div className="media-image-body">
                                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You
                                            Learn HTML & CSS in 2019?</a></h2>
                                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                                            voluptate.</p>
                                        <p><a href="#">Read More</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="custom-pagination">
                                    <span className="current">1</span>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <span>...</span>
                                    <a href="#">14</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
