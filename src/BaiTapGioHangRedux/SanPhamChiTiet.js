import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./SanPhamChiTiet.module.css";

class SanPhamChiTiet extends Component {
  render() {
    return (
      <div className="row">
        <div className="my-5 row">
          <div className="col-3">
            <img
              style={{ width: "100%" }}
              src={this.props.spChiTiet.thumbnail_url}
              alt=""
            />
          </div>
          <div className="col-7">
            <h4> {this.props.spChiTiet.name}</h4>
            <p className="card-text text-danger">
              Price: {this.props.spChiTiet.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    spChiTiet: state.baiTapGioHangReducer.sanPhamChiTiet,
  };
};

export default connect(mapsStateToProps, null)(SanPhamChiTiet);
