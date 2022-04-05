import React, { Component } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import SanPhamChiTiet from "./SanPhamChiTiet";
import ModelGioHang from "./ModelGioHang";

export default class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className="container p-5">
        <ModelGioHang />
        <DanhSachDienThoai />
        <SanPhamChiTiet />
      </div>
    );
  }
}
