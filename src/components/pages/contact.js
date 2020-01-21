import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import contactPagePicture from "../../../static/assets/images/auth/login.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
            className="left-column"
            style={{
               background: `url(${contactPagePicture}) no-repeat`,
               backgroundSize: "cover",
               backgroundPosition: "center"
            }}
            >
                
            </div>
            <div className="right-column">
               <div className="contact-bullet-points">

                   <div className="bullet-point-group">
                       <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                       </div>
                       <div className="text">
                           208-313-8757
                       </div>
                   </div>

                   <div className="bullet-point-group">
                       <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                       </div>
                       <div className="text">
                           gideonfelt.dev@gmail.com
                       </div>
                   </div>

                   <div className="bullet-point-group">
                       <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                       </div>
                       <div className="text">
                           Lehi, UT
                       </div>
                   </div>

               </div>
            </div>
        </div>
    )
}