import { Modal, Button } from "antd";
import React, { Component } from "react";

export default class ModelGioHang extends Component {
  state = {
    isModalVisible: false,
  };
  showModal = () => {
    // setIsModalVisible(true);
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };
  renderSanPham = () => {
    // console.log(this.props.gioHang);
    return this.props.gioHang.map((sp) => {
      return (
        <tr>
          <td>{sp.id}</td>
          <td>
            <img
              style={{
                width: "100px",
              }}
              src={sp.thumbnail_url}
            />
          </td>
          <td>{sp.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.hangleThayDoiSoLuong(sp.id);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {sp.soluong}
            <button
              onClick={() => {
                this.props.hangleThayDoiSoLuong(sp.id * -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>{sp.price.toLocaleString()}</td>
          <td>{(sp.price * sp.soluong).toLocaleString()}</td>
        </tr>
      );
    });
  };
  renderTongSoLuong = () => {
    let count = 0;
    this.props.gioHang.forEach((item) => {
      count += item.soluong;
    });
    return count;
  };
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Giỏ hàng ( {this.renderTongSoLuong()} )
        </Button>
        <Modal
          title="Giỏ hàng"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
        >
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩn</th>
                  <th>Hình</th>
                  <th>Tên</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderSanPham()}</tbody>
            </table>
          </div>
        </Modal>
      </>
    );
  }
}
