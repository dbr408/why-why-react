import React, { Component } from 'react';
import { Navlink } from "react-router-dom";

export default class navigationComponent extends Component {
    constructor() {
      super();
    }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
      <NavLink exact to="/">
        Home
      </NavLink>
      </div>
      <div className="nav-link-wrapper">
      <Navlink to="/about-me">About</Navlink>
      </div>
      <div className="nav-link-wrapper">
      <Navlink to="/contact">Contact</Navlink>
      </div>
      <div className="nav-link-wrapper">
      <Navlink to="/blog">Blog</Navlink>
      </div>
      
        </div>
        <div className="right-side">
          Daniel Brown
        </div>
      </div>
    );
  }
}