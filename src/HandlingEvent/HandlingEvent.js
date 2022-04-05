import React, { Component } from "react";

export default class HandlingEvent extends Component {
  sayHello = () => {
    alert("hello");
  };
  sayHi(name) {
    alert("hi " + name);
  }
  render() {
    return (
      <div className="container py-5">
        <button className="btn btn-success" onClick={this.sayHello}>
          Click hello
        </button>

        <button
          className="btn btn-success mx-3"
          onClick={() => {
            this.sayHi("Cyber");
          }}
        >
          Click hi
        </button>
      </div>
    );
  }
}
