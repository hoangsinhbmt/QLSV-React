import { Footer } from "antd/lib/layout/layout";
import React, { Component } from "react";
import FooterLifeCycle from "./Footer";
import Header from "./Header";
// import Footer from "./Footer";
export default class ContainerPrarent extends Component {
  state = {
    number: 0,
    like: 0,
    userInfor: {
      name: "Alice",
    },
  };

  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    this.setState({ number: this.state.number + 1 });

    //
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("did update - đã dc thay đổi");
    // this.setState({ number: this.state.number + 1 });

    // dc tự động gọi khi hàm render dc gọi
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("next props", nextProps);
    console.log("nextState", nextState);
    if (nextState.number == 6) {
      return false;
    }
    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="cotainer p-5">
        <Header like={this.state.like} dataUser={this.state.userInfor} />
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
          className="btn btn-success mr-3"
        >
          Tăng số lượng
        </button>
        <span className="display-3">{this.state.number}</span>
        {/* {this.state.number < 5 && <FooterLifeCycle />} */}
      </div>
    );
  }
}
