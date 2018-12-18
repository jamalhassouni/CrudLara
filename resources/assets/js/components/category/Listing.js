import React, { Component } from "react";

/**
 * Listing
 */
export class Listing extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Status</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cat 1</td>
            <td>Acitve</td>
            <td>date</td>
            <td>date</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cat 2</td>
            <td>Acitve</td>
            <td>date</td>
            <td>date</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cat 3</td>
            <td>Acitve</td>
            <td>date</td>
            <td>date</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Listing;
