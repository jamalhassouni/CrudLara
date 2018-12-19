import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Index
 */
export default class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
