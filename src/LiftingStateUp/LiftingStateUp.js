import React, { Component } from "react";
import { dataLiftingStateUP } from "./data";
import DienThoaiItem from "./DienThoaiItem";

export default class LiftingStateUp extends Component {
  state = {
    data: dataLiftingStateUP,
    thongTinChiTiet: dataLiftingStateUP[0],
  };
  renderContent = () => {
    return this.state.data.map((item, index) => {
      return (
        <DienThoaiItem
          handleClick={this.handleShowThongTin}
          dienThoai={item}
          key={item.id}
        />
      );
    });
  };

  handleShowThongTin = (value) => {
    this.setState({ thongTinChiTiet: value });
  };
  render() {
    let { name, price, thumbnail_url } = this.state.thongTinChiTiet;
    return (
      <div className="container p-5">
        <div className="my-5 row">
          <div className="col-3">
            <img style={{ width: "100%" }} src={thumbnail_url} alt="" />
          </div>
          <div className="col-7">
            <p className="card-title">{name}</p>
            <p className="card-text">
              <p className="text-danger">Giá :{price.toLocaleString()} đồng</p>
            </p>
          </div>
        </div>

        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
