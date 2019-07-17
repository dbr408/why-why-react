import React, { Component } from 'react';
import { Navlink } from "react-router-dom";

export default class navigationComponent extends Component {
    constructor() {
      super();
    }

  render() {
    return (
      <div>
      <NavLink exact to="/">
        Home
      </NavLink>

      <Navlink to="/about-me">About</Navlink>
      <Navlink to="/contact">Contact</Navlink>
      <Navlink to="/blog">Blog</Navlink>
      
        {true ? <botton>Add Blog</botton> : null }
      </div>
    );
  }
}