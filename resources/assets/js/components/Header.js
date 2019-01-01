import React, { Component } from "react";
import { Link, Route,Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error404 from "./Error404";
import Category from "./category/Index";
/**
 * Header
 */
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            CrudLara
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Category
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Switch>

        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/category" component={Category} />
        <Route exact={true} path="/category/add" component={Category} />
        <Route exact={true} path="/category/edit/:id" component={Category} />
        <Route exact={true} path="/*" component={Error404} />
        </Switch>
      </div>
    );
  }
}
