import React, { Component } from 'react';
import { Navlink } from "react-router-dom";
import axios from 'axios'
import {withRouter} from "react-router"

const NavigationComponent = (props) => {
  
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
      <Navlink to="/blog" activeClassName="nav-link-active">
        Blog
        </Navlink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios.delete("https://api.devcamp.space/logout", {withCredentials: true }).then(response => {
      if (response.status === 200) {
        props.history.push("/");
        props.handleSucessfulLogout();
      }
      return response.data;
    }).catch(error => {
      console.log("Error signing out", error);
    })
  };

    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
      <NavLink exact to="/"activeClassName="nav-link-active">
        Home
      </NavLink>
      </div>
      <div className="nav-link-wrapper">
      <Navlink to="/about-me"activeClassName="nav-link-active">About</Navlink>
      </div>
      <div className="nav-link-wrapper">
      <Navlink to="/contact">Contact</Navlink>
      </div>


      {props.logggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null }
        </div>
        <div className="right-side">
          Daniel Brown

          {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>Sign Out</a> : null }
        </div>
      </div>
    );
  }

  export default withRouter (NavigationComponent);