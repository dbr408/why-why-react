import React, { Component } from "react";
import axios from 'axios';

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
    };
    this.getPortfolioItems = this.getPortfolioItems.bindn(this);
    this.handleFilter = this.handleFilter.bind(this);

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    getPortfolioItems() {
        axios
        .get("https://danielbrown.devcamp.space/portfolio/portfolio_items")
        .then(response => {
        console.log(response);
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(errror => {
        console.log(error);
      });
      }

    portfolioitem() {
        return this.state.data.map(item => {
            return <Portfolioitem 
            key={item.id}
            item={item}
            />;
        })
    }

    render() {
        if(this.state.isloading) {
            return <div>Loading...</div>;
        }

        this.getPortfolioItems();

    return(
        <div>
            <h2>{this.state.pageTitle}</h2>
        <button onClick={() => this.handleFilter}> </button>
            {this.portfolioitem()}
        </div>
        );
    }
}