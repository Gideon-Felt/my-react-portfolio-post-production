import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form"
import PortfolioItem from "../portfolio/portfolio-item";


export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
      portfolioToEdit: {}
    };
  }

  clearPortfolioToEdit = () => {
    this.setState({
      portfolioToEdit: {}
    })
  }

  handleEditClick = PortfolioItem => {
    this.setState({
      portfolioToEdit: PortfolioItem
    })
  }

  handleDeleteClick = (portfolioItem) => {
    axios.delete(
      `https://gdfelt.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
    {withCredentials: true}
    ).then(response => {
      this.setState({
        portfolioItems: this.state.portfolioItems.filter(item => {
          return item.id !== portfolioItem.id
        })
      })
    }).catch(error => {
      console.log("handleDeleteClick error", error)
    })
  }

  handleEditFormSubmission = () => {
    this.getPortfolioItems()
  }

  handleNewSuccessfulFormSubmission = (portfolioItem) => {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
    })
    // TODO
    // update the portfolioItems State
    // and add the portfolioItem to the list
  }

  handleFormSubmissionError = (error) => {
      console.log("handleFormSubmissionError Error", error)
  }



  getPortfolioItems() {
    axios
      .get("https://gdfelt.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in getPortfolioItems", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  
  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm 
          handleNewSuccessfulFormSubmission={this.handleNewSuccessfulFormSubmission}
          handleEditFormSubmission={this.handleEditFormSubmission}
          handleFormSubmissionError={this.handleFormSubmissionError}
          clearPortfolioToEdit={this.clearPortfolioToEdit}
          portfolioToEdit={this.state.portfolioToEdit}
          />
        </div>

        <div className="right-column">
          <PortfolioSidebarList
          data={this.state.portfolioItems}
          handleDeleteClick={this.handleDeleteClick}
          handleEditClick={this.handleEditClick}
          />
        </div>
      </div>
    );
  }
}