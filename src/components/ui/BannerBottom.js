import React, {Fragment} from "react";

export default class BannerBottom extends React.Component{
    render() {
        return(
            <Fragment>
                <div className="py-5 bg-primary">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 text-center mb-3 mb-md-0">
                                <h2 className="text-uppercase text-white mb-4" data-aos="fade-up">Try For Your Next
                                    Project</h2>
                                <a href="#" className="btn btn-bg-primary font-secondary text-uppercase"
                                   data-aos="fade-up" data-aos-delay="100">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
