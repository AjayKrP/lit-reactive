import React, {Fragment} from 'react';
import Header from "./Header";

export default class Home extends React.Component{
    render() {
        return(
            <Fragment>
                <div id="overlayer"></div>
                <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}
