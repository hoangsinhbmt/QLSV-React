import React, { Component } from "react";
import { connect } from "react-redux";
import DasnhSachSinhVien from "./DasnhSachSinhVien/DasnhSachSinhVien";
import ModalSinhVien from "./ModalSinhVien/ModalSinhVien";
import { SET_DANH_SACH_SV } from "./Redux/constant/quanlySVConstant";
import { sinhVienServ } from "./sinhVienServ/sinhVienSer";
 class AxiosQuanLySinhVien extends Component {
  state = {
    dssv: [],
  };
  componentDidMount() {
    let isSuccees = true;
    sinhVienServ
      .layDanhSinhVien()
      .then((res) => {
        // console.log(res);
        // this.setState({ dssv: res.data });
        this.props.setDssv(res.data)
        // xuatThongBAo
      })
      .catch((err) => {
        isSuccees = false;
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <p className="display-3 pt-2 text-center">Quản lý sinh viên</p>
        <ModalSinhVien />
        <DasnhSachSinhVien />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setDssv: (dssv) => {
      dispatch({
        type: SET_DANH_SACH_SV,
        payload: dssv,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(AxiosQuanLySinhVien);

