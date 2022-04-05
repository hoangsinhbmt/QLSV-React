import React, { Component } from "react";

export default class DataBinding extends Component {
  username = "Si ";

  job = "Dev";
  renderContent = () => {
    return `hello ${this.username} - Job: ${this.job}`;
  };
  render() {
    // let renderContent = () => {
    //   return `hello ${username} - Job: ${job}`;
    // };

    return (
      <div>
        {/* Hello {username} - Job: {job} */}
        {this.renderContent()}
      </div>
    );
  }
}
