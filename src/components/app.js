import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigationcontainer';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
           <NavigationContainer />

           <Switch>
            <Route exact path="/" Component={Home} />
            <Route path="/about-me" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/blog" Component={Blog} />
           </Switch>
          </div>
        </Router>

        <h1>Why Why React</h1> ;
        < PortfolioContainer />
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    );
  }
}