import React, { Component } from "react";
import ItemDienThoai from "./ItemDienThoai";

export default class DanhSachDienThoai extends Component {
  render() {
    return (
      <div className="row">
        {this.props.dsdt.map((dt, index) => {
          // console.log("dt", dt.id);
          if (index < 3) {
            return (
              <ItemDienThoai
                data={dt}
                handleShowSanPhamChiTiet={this.props.handleShowSanPhamChiTiet}
                handleThemSanPham={this.props.handleThemSanPham}
              />
            );
          }
        })}
      </div>
    );
  }
}
