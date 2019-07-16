import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio/portfolio-container';
import navigationContainer from './navigation/navigationcontainer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <navigationContainer
        ><h1>Why Why React</h1> ;
        < PortfolioContainer />
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    );
  }
}