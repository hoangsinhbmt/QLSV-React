import React, { Component } from "react";

export default class extends Component {
  state = {
    img: "./img/imgBlackCar.jpg",
  };

  handleChangeCar = (value) => {
    this.setState({ img: value });
  };
  render() {
    return (
      <div className="container p-5">
        <div className="d-flex">
          <img
            style={{
              width: "40%",
            }}
            src={this.state.img}
            alt=""
          />

          <div>
            <button
              onClick={() => {
                this.handleChangeCar("./img/imgRedCar.jpg");
              }}
              className="px-3 mx-2 btn btn-danger"
            >
              Red
            </button>
            <button
              onClick={() => {
                this.handleChangeCar("./img/imgBlackCar.jpg");
              }}
              className="px-3 mx-2 btn btn-dark"
            >
              Black
            </button>
            <button
              onClick={() => {
                this.handleChangeCar("./img/imgSilverCar.jpg");
              }}
              className="px-3 mx-2 btn btn-secondary"
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
