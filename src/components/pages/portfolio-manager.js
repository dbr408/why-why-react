import React, {Component} from "react";
import axios from axios;

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfoliofrom";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        };

        this.handleSuccessfulFormSubmition = this.handleSuccessfulFormSubmition.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick =this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(portfolioItem) {
        this.setState({
            portfolioToEdit: portfolioItem
        })
    }

    handleDeleteClick(portfolioItem) {
        axios.delete(`httpd://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, 
        {withCredentials:true}
        ).then(responce => {
            this.setState({
                portfolioItem: this.state.portfolioItems.filter(item => {
                    return item.id !== portfolioItem.id;
                })
            })

            return response.data;
        }).catch(error => {
            console.log("handleDeleteClick error", error)
        })
    }

    handleSuccessfulFormSubmition(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log(error)
    }

    getPortolioItems() {
        axios.get("https://danielbrown.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
            withCredentials: true}).then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                })
            }).catch(error => {
                console.log("error here", error);
            })
    }

    componentDidMount(){
        this.getPortolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                <PortfolioForm 
                handleSuccessfulFormSubmition={this.handleSuccessfulFormSubmition}
                handleFormSubmissionError={this.handleFormSubmissionError}
                />
                </div>

            <div className="right-column">
                <PortfolioSidebarList 
                handleDeleteClick={this.handleDeleteClick}
                data={this.state.portfolioItems}
                handleEditClick={this.handleEditClick}
                />
            </div>
            </div>
        );
    }
}