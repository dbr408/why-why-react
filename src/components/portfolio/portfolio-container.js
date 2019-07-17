import React, { Component } from "react";

import Portfolioitem from "./portfolioitem";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle:"welcome to my react",
            data:[
            {title: "Quip", category: "eCommerce", slug: 'quip' },
            {title: "Eventbrite", category: "Scheduling", slug: 'eventbrite' },
            {title: "Ministry Safe", category: "eCommerce", slug: 'ministry-safe' },
            { title: "SwingAway", category: "eCommerce", slug:'swingaway' }
        ]
        }
    }

    portfolioitem(){
        return this.state.data.map(item => {
            return <Portfolioitem title={item} url={"google.com"} slug={item.slug} />;
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