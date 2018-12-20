import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer d-flex justify-content-between  mt-5">
          <div className="container">
            <div className="ikonlar">
              <a href="#">
                <span className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <span className="fab fa-twitter" />
              </a>
              <a href="#">
                <span className="fab fa-linkedin" />
              </a>
              <a href="#">
                <span className="fab fa-instagram" />
              </a>

              <p>Copyright © 2018. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
