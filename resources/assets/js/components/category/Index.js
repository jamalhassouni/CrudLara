import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import Listing from "./Listing";

/**
 * Index
 */
export class Index extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/category" className="btn btn-primary mx-1 my-2">
            Listing
          </Link>
          <Link to="/category/add" className="btn btn-primary mx-1 my-2">
            Add
          </Link>
          <Route exact={true} path="/category" component={Listing} />
          <Route exact={true} path="/category/add" component={Add} />
          <Route exact={true} path="/category/edit/:id" component={Edit} />
        </div>
      </div>
    );
  }
}

export default Index;
