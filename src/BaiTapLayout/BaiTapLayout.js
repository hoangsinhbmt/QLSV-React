import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import Sider from "./Sider";
import "./css/style.css";
export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sider />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
