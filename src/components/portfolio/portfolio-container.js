import React, { Component } from "react";
import axios from 'axios';

import Portfolioitem from './portfolioitem';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle:"welcome to my react",
            data:[
            {title: "Quip", category: "eCommerce", slug: 'quip' },
            {title: "Eventbrite", category: "Scheduling", slug: 'eventbrite' },
            {title: "Ministry Safe", category: "eCommerce", slug: 'ministry-safe' },
            { title: "SwingAway", category: "eCommerce", slug:'swingaway' },
        ]
        }
    
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    }
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

    Portfolioitem() {
        return this.state.data.map(item => {
            return <Portfolioitem 
            key={item.id}
            item={item}
            />
        })
    }

    render() {
        if(this.state.isloading) {
            return <div>Loading...</div>;
        }

        return( 
            <div className="portolio-items-wrapper">
            <button className="btn" onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
            <button className="btn" onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
            <button className="btn" onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>


            {this.portfolioItem()}</div>
        );
    };
}