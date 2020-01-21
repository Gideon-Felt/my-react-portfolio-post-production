import React, { Component } from 'react';
import Axios from 'axios';

// id: 13303
// name: "Crondose"
// description: "Online Tutorials and productivity tips."
// url: "https://www.crondose.com"
// category: "Technology"
// position: 1
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/Uuugir9LeAnCeGConxmSnGEi?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200121T064805Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=d718657a9af1fa8668e459b41147bf5cb757f3fb58e5a40d7e58f66d30811a4d"
// banner_image_url: "https://devcamp-space.s3.amazonaws.com/fMo2qPiDaQr55uSAnLHRkWE7?response-content-disposition=inline%3B%20filename%3D%2


export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)


        this.state = {
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
        Axios.get(`https://gdfelt.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true }).then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        })
        .catch(error => {
            console.log("getPortfolioItem error", error)
        })
    }

    

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;
        
        const bannerStyles = {
            backgroundImage: `url(${banner_image_url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        const logoStyles = {
            width: "200px"
        }

        return (
            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                    <img src={logo_url} style={logoStyles}/>
                </div>

                <div className="portfolio-detail-description-wrapper">
                    <div className="description">{description}</div>
                </div>

                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">
                     Visit {name}   
                    </a>
                </div>
                
            </div>
        )
    }
    
}