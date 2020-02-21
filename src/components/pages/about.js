import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ResumeModal from "../modals/resume-pdf-modal"

import profilePicture from "../../../static/assets/images/bio/headshot.jpg"

import pythonIcon from "../../../static/assets/images/bio/skills/python.png"
import reactIcon from "../../../static/assets/images/bio/skills/react.png"
import jsIcon from "../../../static/assets/images/bio/skills/js.png"
import mongoIcon from "../../../static/assets/images/bio/skills/mongo.png"
import mySqlIcon from "../../../static/assets/images/bio/skills/mysql.png"
import scssIcon from "../../../static/assets/images/bio/skills/scss.png"
import htmlIcon from "../../../static/assets/images/bio/skills/html.png"
import cssIcon from "../../../static/assets/images/bio/skills/css.png"
import sqLiteIcon from "../../../static/assets/images/bio/skills/sqlite.png"
import redisIcon from "../../../static/assets/images/bio/skills/redis.png"


export default function() {
    const [ bioTextPanelStyles, setBioTextPanelStyles ] = useState({width: "90%", marginRight: "0", display: "visible", heigh: "10vh"})
    const [ contactMePanelStyles, setContactMePanelStyles ] = useState({width: "0", marginRight: "-90%", display: "none", heigh: "10vh"})
    const [ resumePanelStyles, setResumePanelStyles ] = useState({width: "0", marginRight: "-90%", display: "none", heigh: "10vh"})
    const [ resumeModalIsOpen, setResumeModalIsOpen ] = useState(false)
    const [ lastTab, setLastTab ] = useState("text")


    function openAboutText() {
        setBioTextPanelStyles({width: "90%", marginRight: "0", display: "flex", heigh: "10vh"})
        setContactMePanelStyles({width: "0", marginRight: "0", display: "none", heigh: "10vh"})
        setResumePanelStyles({width: "0", marginRight: "0", display: "none", heigh: "10vh"})
        setLastTab("text")
    }

    function openContact() {
        setBioTextPanelStyles({width: "0", marginRight: "0", display: "none", heigh: "10vh"})
        setContactMePanelStyles({width: "90%", marginRight: "-90%", display: "flex", heigh: "10vh"})
        setResumePanelStyles({width: "0", marginRight: "0", display: "none", heigh: "10vh"})
        setLastTab("contact")
      }
    
    
    function openResume() {
        setBioTextPanelStyles({width: "0", marginRight: "0", display: "none", heigh: "10vh"})
        setContactMePanelStyles({width: "0", marginRight: "0", display: "none", heigh: "10vh"})
        setResumePanelStyles({width: "90%", marginRight: "-90%", display: "flex", heigh: "10vh"})
        setResumeModalIsOpen(true)
    }
    
    function handleModalClose() {
        setResumeModalIsOpen(false)
        if (lastTab === "text") {
            openAboutText()
        } else if (lastTab === "contact") {
            openContact()
        } 
    }


    return ( // TODO add flex wrap to both left and right columns so right slides under left.
        <div className="outer-wrapper">
            <div className="content-page-wrapper">
                <div className="bio-image-wrapper">
                    <img className="bio-image" src={profilePicture} alt="bio-img"/>                
                </div>
                <div className="about-right-column">
                    <div className="content-card">

                        <div className="tab-control-spacer">
                            <div className="tab-control-wrapper">
                                <span className="about-tab" onClick={() => openAboutText()}>About Me</span>
                                <span className="about-tab center" onClick={() => openContact()}>Contact Me</span>
                                <span className="about-tab" onClick={() => openResume()}>My Resume</span>
                            </div>
                        
                        </div>
                        
                        <div className="lower-card-wrapper">
                            <div className="bio-text-wrapper" style={bioTextPanelStyles}>
                                <span className="text-content">I’m a success-driven problem solver. My motivation derives from doing work that has a broad, long-lasting impact. I am known for my integrity and work ethic.
                                    I’m tenacious and detail oriented. Continual growth is something I value highly in myself and others. I believe in the contagious nature of positivity. I
                                    believe in flexibility where needed and standing up for what I know is right. Strong teamwork, open and honest communication, and the criticality of
                                    time management and task prioritization are all skills I have and believe are important to my success and the success of those around me.
                                </span>
                            </div >
                            
                            <div className="contact-me-wrapper" style={contactMePanelStyles}>
                                {/* Contact page  */}
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

                            <div className="view-resume-wrapper" style={resumePanelStyles}>
                                <div className="resume-modal-wrapper">
                                    <ResumeModal handleModalClose={handleModalClose} resumeModalIsOpen={resumeModalIsOpen}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-icon-wrapper">
                <div className="skill-icon">
                    <img className="icon" src={pythonIcon} alt="python-icon"/>
                    <p>Python</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={reactIcon} alt="react-icon"/>
                    <p>React</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={jsIcon} alt="js-icon"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={mongoIcon} alt="mongo-icon"/>
                    <p>MongoDB</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={mySqlIcon} alt="mysql-icon"/> 
                    <p>MySQL</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={scssIcon} alt="scss-icon"/> 
                    <p>SCSS</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={htmlIcon} alt="html-icon"/> 
                    <p>HTML5</p>
                </div> 
                <div className="skill-icon">
                    <img className="icon" src={cssIcon} alt="css-icon"/>
                    <p>CSS3</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={sqLiteIcon} alt="sqlite-icon"/>
                    <p>SQLite</p>
                </div>
                <div className="skill-icon">
                    <img className="icon" src={redisIcon} alt="redis-icon"/>
                    <p>Redis</p>
                </div>
            </div>
        </div>
    )
}