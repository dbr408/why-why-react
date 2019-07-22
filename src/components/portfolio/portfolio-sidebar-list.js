import React from 'react';

const PortfofliosidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItems => {
      return(
          <div className="portfolio-item-thumb">
              <div classname="portfolio-thumb-img">
                  <img src={portfolioItems.thumd_image_url} />
              </div>
              <h1 className="title">{portfolioItems.name}</h1>
              <h2>{portfolioItems.id}</h2>
          </div>
      );
    });

    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
};

export default PortfofliosidebarList;
