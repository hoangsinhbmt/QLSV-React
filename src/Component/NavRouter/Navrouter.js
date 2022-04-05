import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class Navrouter extends Component {
  render() {
    return (
      <div className="container m-5">
        <NavLink exact activeClassName="text-danger" to="/" className="mx-3">
          Trang chủ
        </NavLink>
        <NavLink activeClassName="text-danger" to="/dssv" className="mx-3">
          Danh Sách
        </NavLink>
      </div>
    );
  }
}
