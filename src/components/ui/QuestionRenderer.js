import React, {Fragment} from "react";
import BannerTop from "./BannerTop";
const ReactMarkdown = require('react-markdown')


export default class QuestionRenderer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions : [],
            currentPage: 1
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {match: {params}} = this.props;
        fetch(`http://localhost:1337/api/get-questions/${params.type}/?page=${this.state.currentPage}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (result.questions) {
                        this.setState({
                            questions: result.questions
                        });
                    } else {
                        this.setState({
                            questions: []
                        });
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('error while fetching questions')
                }
            )
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch(`http://localhost:1337/api/get-questions/${params.type}/?page=${this.state.currentPage}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (result.questions) {
                        this.setState({
                            questions: result.questions
                        });
                    } else {
                        this.setState({
                            questions: []
                        });
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('error while fetching questions')
                }
            )
    }


    handleClick = (e, page) => {
        this.setState({
            currentPage: page
        })
    }
    render() {
        let firstBackgroundImage = {
            backgroundImage: 'url(images/hero_2.jpg)'
        };
        return(
            <Fragment>
                <BannerTop backgroundImage={firstBackgroundImage} bannerText={'Question Detail Page'}/>
                <div className="site-section first-section">
                    <div className="container">
                        <div className="row">
                            {this.state.questions.map((question, index) =>
                                <div key={index * this.state.currentPage} className="col-md-12 col-lg-12 mb-4" data-aos="fade-up" data-aos-delay="100">
                                    <h5 className="d-flex align-items-center"><span className="circle-icon-wrap mr-3"><span>{(index + 1) + 10 * (this.state.currentPage - 1)}</span></span>
                                        {question.Q}</h5>
                                    <ReactMarkdown source={question.A}/>
                                </div>
                            )}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="custom-pagination">
                                    <a onClick={((e) => this.handleClick(e, 1))}>1</a>
                                    <a onClick={((e) => this.handleClick(e, 2))}>2</a>
                                    <a onClick={((e) => this.handleClick(e, 3))}>3</a>
                                    <a onClick={((e) => this.handleClick(e, 4))}>4</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
