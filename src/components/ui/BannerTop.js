import React, {Fragment} from "react";

export default class BannerTop extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <div className="site-blocks-cover inner-page overlay" style={this.props.backgroundImage}
                     data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5 text-center" data-aos="fade">
                            <h1 className="text-uppercase">{this.props.bannerText}</h1>
                            <span className="caption d-block text-white">Free Templates by <a
                                href="#">Colorlib</a></span>
                        </div>
                    </div>
                </div>
                <div className="slant-1"></div>
            </Fragment>
        )
    }
}
