import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation/navigationcontainer';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
          <h1>Why Why React</h1> 
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
           <NavigationContainer />

           <Switch>
            <Route exact path="/" Component={Home} />
            <Route path="/about-me" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/blog" Component={Blog} />
            <Route exact path="/portfolio/:slug" Component={PortfolioDetail} />
            <Route Component={NoMatch} />
           </Switch>
          </div>
        </Router>

        </div>
    );
  }
}