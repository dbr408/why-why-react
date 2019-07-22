import React, {Component} from "react";
import axios from axios;

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfoliofrom";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };

        this.handleSuccessfulFormSubmition = this.handleSuccessfulFormSubmition.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmition(portfolioItems) {
        //TODO
        //update the portfolioItems state
        //and add the portfolioItem to the list
    }

    handleFormSubmissionError(error) {
        console.log(error)
    }

    getPortolioItems() {
        axios.get("https://danielbrown.devcamp.space/portfolio/portfolio_items", {
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
                handleSuccessfulFormSubmition={this.handleSuccessfulFormSubmition};
                handleFormSubmissionError={this.handleFormSubmissionError}
                />
                </div>

            <div className="right-column">
                <PortfolioSidebarList data={this.state.portfolioItems}/>
            </div>
            </div>
        );
    }
}