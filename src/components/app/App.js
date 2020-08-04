import React, {Component, Fragment} from 'react';
import { Switch } from 'react-router';
import {
    Home,
    Page404,
    Category,
    Footer,
    Preloader,
    Header,
    Blog,
    Contact,
    Services,
    BlogDetail,
    About,
    BannerBottom,
    Gallery,
    FAQ,
    Testimonials,
    WhyChooseUs,
    QuestionRenderer
} from "../ui";

import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="site-wrap">
                        <Preloader/>
                        <Header/>
                        <Switch>
                            <Route exact path="/"><Home/></Route>
                            <Route  path={'/category'}>
                                <Category/>
                            </Route>
                            <Route  path={'/blogs'}>
                                <Blog/>
                            </Route>
                            <Route  path={'/contact'}>
                                <Contact/>
                            </Route>
                            <Route  path={'/services'}>
                                <Services/>
                            </Route>
                            <Route path={'/single.html'}>
                                <BlogDetail/>
                            </Route>
                            <Route path={'/about'}>
                                <About/>
                            </Route>
                            <Route path={'/gallery'}>
                                <Gallery/>
                            </Route>
                            <Route path={'/faq'}>
                                <FAQ/>
                            </Route>
                            <Route path={'/testimonials'}>
                                <Testimonials/>
                            </Route>
                            <Route path={'/why-choose-us'}>
                                <WhyChooseUs/>
                            </Route>
                            <Route path="/render-question/:type" component={QuestionRenderer}/>
                            <Route>
                                <Page404/>
                            </Route>
                        </Switch>
                        <BannerBottom/>
                    </div>
                    <Footer/>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
