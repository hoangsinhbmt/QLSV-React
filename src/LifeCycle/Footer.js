import React, { Component } from "react";
let myInterval;

export default class FooterLifeCycle extends Component {
  componentDidMount() {
    let currentTime = 3600;
    console.log("did mount footeer");

    myInterval = setInterval(() => {
      currentTime--;
      console.log("counted", currentTime);
    }, 1000);
  }
  componentWillUnmount() {
    console.log("remove");
    clearInterval(myInterval);
  }
  render() {
    console.log("footer");
    return <div className="display-3">Footer</div>;
  }
}
