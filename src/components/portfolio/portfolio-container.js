import React, { Component } from "react";

import Portfolioitem from "./portfolioitem";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    }

    portfolioitem(){
        const data = ["Quip", "Eventbrite", "Ministry Safe"];

        return data.map(item => {
            return <Portfolioitem title={item} url={"google.com"} />;
        })
    }
    render() {
        return (
        <div>
            <h2>text here</h2>

            {this.portfolioitem()}
        </div>
        );
    }
}