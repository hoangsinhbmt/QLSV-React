import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SanPhamChiTietAction,
  themGioiHangAction,
} from "./redux/action/gioiHangAction";

class ItemDienThoai extends Component {
  render() {
    let { thumbnail_url, name, price } = this.props.data;
    return (
      <div className="col-3 p-1">
        <div className="card p-3">
          <img
            className="card-img-top"
            src={thumbnail_url}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <div>
                {price <= 3000000 ? (
                  <p className="text-primary">Giá: {price.toLocaleString()}</p>
                ) : (
                  <p className="text-danger">Giá: {price.toLocaleString()}</p>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={() => {
                  // this.props.handleShowSanPhamChiTiet(this.props.data);

                  this.props.handleSpChiTiet(this.props.data);
                }}
              >
                Xem chi tiết
              </button>
              <button
                onClick={() => {
                  // this.props.handleThemSanPham(this.props.data);
                  this.props.handleThemSp(this.props.data);
                }}
                className="btn btn-danger"
              >
                Thêm giỏ hàng
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSpChiTiet: (value) => {
      dispatch(SanPhamChiTietAction(value));
    },
    handleThemSp: (value) => {
      dispatch(themGioiHangAction(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemDienThoai);
