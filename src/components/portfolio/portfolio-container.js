import React, { Component } from 'react';
import axios from 'axios'

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State
    // Lifecycle hooks
    constructor() {
        super()
        
        // Initial State
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []
        }
        this.handleFilter = this.handleFilter.bind(this)
    }

    getPortfolioItems(filter = null) {
        
        axios.get('https://gdfelt.devcamp.space/portfolio/portfolio_items')
        .then(response => {
            if (filter) {
                this.setState({
                    data: this.state.data.filter(item => {
                        return item.category === filter
                    }) 
                })
            } else {
                this.setState({
                    data: response.data.portfolio_items
                })
            }
        })
        .catch(error => {
          console.log(error);
        })
      }


    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems()
        } else {
            this.getPortfolioItems(filter)
        }
    }

    portfolioItems() {
        return this.state.data.map(item => {
            console.log("Portfolio Item", item)
            return <PortfolioItem key={item.id} item={item}/> // props are the names = value and are called in the item call
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('Marketing')}>Marketing</button>
                    <button className="btn" onClick={() => this.handleFilter('For Fun')}>For Fun</button>
                    <button className="btn" onClick={() => this.handleFilter('Data Parsing')}>Data Parsing</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>All</button>
                </div>

                <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
            </div>
        )
    }
}