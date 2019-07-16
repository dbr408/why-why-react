import React, { Component } from "react";

import Portfolioitem from "./portfolioitem";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle:"welcome to my react",
            data:[
            {title: "Quip"},
            {title: "Eventbrite"},
            {title: "Ministry Safe"}]
        }
    }

    portfolioitem(){
        return this.state.data.map(item => {
            return <Portfolioitem title={item} url={"google.com"} />;
        })
    }
    render() {
        return (
        <div>
            <h2>{this.state.pageTitle}</h2>

            {this.portfolioitem()}
        </div>
        );
    }
}