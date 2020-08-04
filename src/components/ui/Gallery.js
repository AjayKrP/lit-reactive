import React, {Fragment} from "react";
import BannerTop from "./BannerTop";

export default class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            topics: [
                {
                    name: "NodeJS",
                    imageUrl: "images/interview/nodejs.png"
                },
                {
                    name: "Java",
                    imageUrl: "images/interview/java.png"
                },
                {
                    name: "MySQL",
                    imageUrl: "images/interview/mysql.png"
                },
                {
                    name: "Javascript",
                    imageUrl: "images/interview/js.png"
                },
            ]
        }
    }
    render() {
        let firstBackgroundImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        };
        return(
            <Fragment>
                <BannerTop backgroundImage={firstBackgroundImage} bannerText={'Photo Gallery'}/>
                <div className="site-section first-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12 text-center" data-aos="fade">
                                <span
                                    className="caption d-block mb-2 font-secondary font-weight-bold">Learning Gallery</span>
                                <h2 className="site-section-heading text-uppercase text-center font-secondary">
                                    Technical Interview Preparation</h2>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.topics.map((topic, index) =>
                                <div className="col-md-6 col-lg-3 mb-4 topics" data-aos="fade-up" data-aos-delay="">
                                    <a href={`/render-question/${topic.name}`} data-fancybox="gallery"><img src={topic.imageUrl}
                                                                                                   alt={topic.name}
                                                                                                   className="img-fluid"/></a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


            </Fragment>
        )
    }
}
