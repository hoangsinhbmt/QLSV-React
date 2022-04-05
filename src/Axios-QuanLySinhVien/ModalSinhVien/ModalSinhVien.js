import React, { Component } from "react";
import { connect } from "react-redux";
import { THEM_SINH_VIEN } from "../Redux/constant/quanlySVConstant";

class ModalSinhVien extends Component {
  state = {
    sinhvien: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };
  handleOnchange(e) {
    this.setState({
      sinhvien: { ...this.state.sinhvien, [e.target.name]: e.target.value },
    });
  }
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal"
          >
            Thêm Sinh Viên
          </button>
          {/* The Modal */}
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input
                      value={this.state.sinhvien.id}
                      type="text"
                      name="id"
                      id="id"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleOnchange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tên</label>

                    <input
                      value={this.state.sinhvien.name}
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleOnchange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>

                    <input
                      value={this.state.sinhvien.email}
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleOnchange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label>

                    <input
                      value={this.state.sinhvien.phone}
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleOnchange(e);
                      }}
                    />
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => {
                      this.props.themSinhVien(this.state.sinhvien);
                    }}
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sv) => {
      dispatch({
        type: THEM_SINH_VIEN,
        payload: sv,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(ModalSinhVien);
