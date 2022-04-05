import React, { Component } from "react";

export default class DieuKien extends Component {
  isLogin = false;
  renderContent() {
    if (this.isLogin) {
      return <p>Hello user</p>;
    } else {
      return (
        <button className="btn btn-success" onClick={this.handleLogin}>
          Đăng nhập
        </button>
      );
    }
  }
  handleLogin() {
    this.isLogin = true;
  }
  render() {
    console.log("isLogin", this.isLogin);

    return (
      <div>{this.isLogin ? "hello user" : <button>Đăng nhập</button>}</div>
    );
  }
}
