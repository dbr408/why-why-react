import React, { Component } from 'react';
import login from "../auth/login"
import loginImg from "../../../static/assets/images/auth/login.jpg"

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div 
                className="left-column" 
                style={{
                    backgroundImage: `url(${loginImg})`
                }}
                />

                <div className="right-column">
                    <login  />
                </div>
            </div>
        );
    }
}