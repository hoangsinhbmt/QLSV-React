import React, { Component } from "react";
import { connect } from "react-redux";
import { tangSoLuongAction } from "./redux/actions/numberAction";
import { GIAM, TANG } from "./redux/constants/numberConstant";

class DemoMiniRedux extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.tangSoLuong(20);
          }}
        >
          Tăng
        </button>
        <span>{this.props.number}</span>
        <button className="btn btn-danger" onClick={this.props.giamSoLuong}>
          Giảm
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    number: state.numberReducer.number,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    tangSoLuong: (value) => {
      dispatch(tangSoLuongAction(value));
    },
    giamSoLuong: () => {
      dispatch({
        type: GIAM,
        payload: 10,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoMiniRedux);
