import React, { Component } from "react";

export default class State extends Component {
  state = {
    number: 2342134,
  };
  handleChangeNumber = () => {
    let random = Math.random();

    // this.number = random;

    this.setState({
      number: random,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleChangeNumber}>Random number</button>
      </div>
    );
  }
}
