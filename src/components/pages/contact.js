import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import contactPagePicture from '../../../static/assets/images/auth/login.jpg'

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="right-column">
              <div className="contact-bullet-point">
                <div className="bullet-point-group">
                  <div className="text">555-555-5555</div>

                  <div className="icon">
                    <FontAwesomeIcon icon="phone" />
                  </div>
                </div>
                <div className="bullet-point-group">
                  <div className="text">1234@1234.com</div>

                  <div className="icon">
                    <FontAwesomeIcon icon="envelope" />
                  </div>
                </div>
                <div className="bullet-point-group">
                  <div className="text">place,place</div>

                  <div className="icon">
                    <FontAwesomeIcon icon="map-marked-alt" />
                  </div>
                </div>
              </div>
             </div>
            <div 
            className="left-column" 
            style={{
                background: "url(" + contactPagePicture +") no-repeat",
                background: "cover",
                backgroundPosition: "center",
            }}
            />
        </div>
    );
}