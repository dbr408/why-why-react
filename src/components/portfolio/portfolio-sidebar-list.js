import React from 'react';
import {FontAwesome} from '@fortswesome/react-fontawesome';


const PortfofliosidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItems => {
      return(
          <div key={portfolioItems.id} className="portfolio-item-thumb">
              <div classname="portfolio-thumb-img">
                  <img src={portfolioItems.thumd_image_url} />
              </div>
              <div className="text-content">
              <div className="title">{portfolioItems.name}</div>

              <div className="actions">
                  <a className="action-icon"
                  onClick={() => props.handleEditClick(portfolioItems)}>
                      <FontAwesomeIcon icon="edit" />
                  </a>
              <A className="action-icon"onClick={() => props.hanbleDeleteClick(portfolioItems)}>
                  <FontAwesomeIcon icon="trash" />
              </A>
              </div>
              </div>
          </div>
      );
    });

    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
};

export default PortfofliosidebarList;
