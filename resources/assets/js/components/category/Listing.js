import React, { Component } from "react";
import axios from "axios";
/**
 * Listing
 */
export class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    // Fetch data from api
    axios.get("http://localhost:8000/category/").then(response => {
      this.setState({ categories: response.data });
    });
  }
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
          {this.state.categories.map((category, index) => {
            return (
              <tr key={index}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                <td>{category.active == 1 ? "Active" : "Inactive"}</td>
                <td>{category.created_at}</td>
                <td>{category.updated_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Listing;
