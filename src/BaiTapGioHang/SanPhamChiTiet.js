import React, { Component } from "react";
import classes from "./SanPhamChiTiet.module.css";

export default class SanPhamChiTiet extends Component {
  render() {
    return (
      <div className="row">
        <div className="my-5 row">
          <div className="col-3">
            <img
              style={{ width: "100%" }}
              src={this.props.sanPhamChiTiet.thumbnail_url}
              alt=""
            />
          </div>
          <div className="col-7">
            <h4> {this.props.sanPhamChiTiet.name}</h4>
            <p className="card-text text-danger">
              Price: {this.props.sanPhamChiTiet.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
