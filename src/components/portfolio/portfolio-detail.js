import React, {Component} from "react";
import axios from 'axios'


export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolioItem: {}
    }
  }

  componentWillMount() {
    this.getPorfolioItem;
  }

  getPorfolioItem() {
    axios.get(`https://danielbrown.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}` 
    ,{ withCredentials:true }).then ( response => {
      this.setState({
        portfolioItem: response.data.portfolio_item
      })
    }).catch(error => {
      console.log(error);
    })
  }

    render() {
      const{
        banner_image_url,
        category,
        description,
        logo_url,
        name,
        thumb_image_url,
        url,
      } = this.state.portfolioItem;

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner">
          <img src={logo_url} />
        </div>

        <div className="portfolio-detail-descrition-wrapper">
          <div className="description">{descrition}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Vist {name}
          </a>
        </div>
      </div>
    )
    }
    }