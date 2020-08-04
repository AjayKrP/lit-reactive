import React, {Fragment} from 'react';
import Header from "./Header";

export default class Category extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            category: [
                'notejs',
                'javascript',
                'java',
                'data-structure',
                'mysql'
            ]
        }
    }


    render() {
        return(
            <Fragment>

            </Fragment>
        )
    }
}
