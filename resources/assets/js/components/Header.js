import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
/**
 * Header
 */
export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/about"> About Us </Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}