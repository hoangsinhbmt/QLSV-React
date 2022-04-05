import React, { Component } from "react";
import ReactLoading from "react-loading";

export default class LoadingComponent extends Component {
  render() {
    return (
      <div>
        <ReactLoading type={"spin"} color={"red"} height={100} width={100} />
      </div>
    );
  }
}
