import React, { Component } from "react";
import DienThoaiItem from "./DienThoaiItem";

export default class Props extends Component {
  renderContent = () => {
    return this.props.dsdt?.map((item, index) => {
      return <DienThoaiItem dienThoai={item} key={item.id} />;
    });
  };
  render() {
    return (
      <div className="container p-5">
        <p>Hello</p>
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
