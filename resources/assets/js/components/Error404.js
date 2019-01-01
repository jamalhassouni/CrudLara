import React, { Component } from "react";
import {Link} from "react-router-dom";
/**
 * Error404
 */
class Error404 extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return <div className="error404">
    <div className="alert alert-danger">404 Page Not Found
     <Link to="/" className="alert-link"> Back to home</Link>
    </div>
   </div>
    ;
  }
}


export default Error404;
