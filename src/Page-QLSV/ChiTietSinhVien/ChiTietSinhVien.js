import React, { Component } from "react";
import axios from "axios";
import LoadingComponent from "../../Component/LoadingComponent/LoadingComponent";

export default class ChiTietSinhVien extends Component {
  state = {
    ThongTinCHiTiet: null,
    isLoading: true,
  };

  componentDidMount() {
    let idurl = this.props.match.params.id;
    axios({
      method: "GET",
      url: `https://620e4f4d585fbc3359ddab9b.mockapi.io/sinhvien/${idurl}`,
    })
      .then((res) => {
        this.setState({ isLoading: false });
        this.setState({ ThongTinCHiTiet: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container m-5">
        {this.state.isLoading && <LoadingComponent />}
        <div>Tên: {this.state.ThongTinCHiTiet?.name}</div>
        <div>Email: {this.state.ThongTinCHiTiet?.email}</div>
        <div>Số đt: {this.state.ThongTinCHiTiet?.phone}</div>
      </div>
    );
  }
}
