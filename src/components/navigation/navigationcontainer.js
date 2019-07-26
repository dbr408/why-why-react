import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router';

const NavigationComponent = (props) => {
  
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
      <NavLink to="/blog" activeClassName="nav-link-active">
        Blog
        </NavLink>
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
      <NavLink exact to="/" activeClassName="nav-link-active">
        Home
      </NavLink>
      </div>
      <div className="nav-link-wrapper">
      <NavLink to="/about-me"activeClassName="nav-link-active">About</NavLink>
      </div>
      <div className="nav-link-wrapper">
      <NavLink to="/contact">Contact</NavLink>
      </div>


      {props.logggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null }
        </div>
        <div className="right-side">
          Daniel Brown

          {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a> : null }
        </div>
      </div>
    );
  }

  export default withRouter (NavigationComponent);
