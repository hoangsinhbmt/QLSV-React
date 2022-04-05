import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
  SUA_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../Redux/constant/quanlySVConstant";

class ItemSinhVien extends Component {
  render() {
    let { sv } = this.props;
    return (
      <tr>
        <td>{sv.id}</td>
        <td>{sv.name}</td>
        <td>{sv.email}</td>
        <td>{sv.phone}</td>

        <td className="flex">
          <button
            className="btn btn-success mr-1"
            data-toggle="modal"
            data-target="#myModal"
            onClick={()=>{
              this.props.suaSinhvien(sv)
            }}
          >
            Sửa
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.xoaSinhVien(sv.id);
            }}
          >
            Xoá
          </button>
          <button className="btn btn-success m-1">
            <NavLink className="text-white" to={`/detail/${sv.id}`}>
              Xem Chi Tiết
            </NavLink>
          </button>
        </td>
      </tr>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    xoaSinhVien: (id) => {
      dispatch({
        type: XOA_SINH_VIEN,
        payload: id,
      });
    },
    suaSinhvien: (sv) => {
      dispatch({
        type: SUA_SINH_VIEN,
        payload: sv,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemSinhVien);
