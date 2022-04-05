import React, { Component } from "react";
import { data } from "./data";

export default class RenderWithMap extends Component {
  renderContent = () => {
    return data.map((item, index) => {
      let { thumbnail_url, name, price } = item;
      return (
        <div className="col-3 p-3">
          <div className="card p-3">
            <img className="card-img-top" src={thumbnail_url} alt />
            <div className="card-body">
              <p className="card-title">{name}</p>
              <p className="card-text">
                <p className="text-danger">
                  Giá :{price.toLocaleString()} đồng
                </p>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container p-5">
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
