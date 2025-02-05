import React, {Fragment} from "react";
import BannerTop from "./BannerTop";

export default class WhyChooseUs extends React.Component{
    render() {
        let firstBackgroundImage = [
            {
                backgroundImage: 'url(images/hero_2.jpg)'
            },
            {
                backgroundImage:  'url(images/img_4.jpg)'
            },
            {
                backgroundImage: 'url(images/img_5.jpg)'
            },
        ];
        return(
            <Fragment>
                <BannerTop backgroundImage={firstBackgroundImage[0]} bannerText={'Testimonials'}/>

                <div className="site-section first-section">
                    <div className="site-half">
                        <div className="img-bg-1" style={firstBackgroundImage[1]}></div>
                        <div className="container">
                            <div className="row no-gutters align-items-stretch">
                                <div className="col-lg-5 ml-lg-auto py-5">
                                    <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                                    <h2 className="site-section-heading text-uppercase font-secondary mb-5">Clean
                                        Design</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid
                                        eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint
                                        rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora
                                        distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="site-half block">
                    <div class="img-bg-1 right" style={firstBackgroundImage[2]}></div>
                    <div class="container">
                        <div class="row no-gutters align-items-stretch">
                            <div class="col-lg-5 mr-lg-auto py-5">
                                <span class="caption d-block mb-2 font-secondary font-weight-bold">Easy To Use Templates</span>
                                <h2 class="site-section-heading text-uppercase font-secondary mb-5">Free HTML5 Templates</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div class="site-section section-counter">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p class="mb-5"><img src="images/img_1.jpg" alt="Image" class="img-fluid"/></p>
                    </div>
                    <div class="col-lg-5 ml-auto">
                        <h2 class="site-section-heading mb-3 font-secondary text-uppercase">Free Templates By Colorlib</h2>
                        <p class="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi cupiditate, mollitia. </p>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="counter">
                                    <span class="caption">Current Downloads</span>
                                    <span class="number" data-number="49020">0</span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="counter">
                                    <span class="caption">Number of Templates</span>
                                    <span class="number" data-number="275">0</span>
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
