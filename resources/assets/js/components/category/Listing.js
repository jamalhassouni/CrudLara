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
    axios.get("http://localhost:8000/api/category").then(response => {
      this.setState({ categories: response.data });
    });
  }
  // Delete category
  onDelete(id) {
    axios
      .delete(`http://localhost:8000/api/category/delete/${id}`)
      .then(response => {
        this.setState({ categories: response.data.data });
      });
  }
  onEdit() {}
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.categories.map((category, index) => {
            return (
              <tr key={category.id}>
                <th scope="row">{index + 1}</th>
                <td>{category.name}</td>
                <td>{category.active == 1 ? "Active" : "Inactive"}</td>
                <td>{category.created_at}</td>
                <td>{category.updated_at}</td>
                <td>
                  <button
                    title="delete"
                    className="btn btn-danger mx-1 my-2"
                    onClick={this.onDelete.bind(this, category.id)}
                  >
                    <span className="fa fa-times" />
                  </button>
                  <button
                    title="edit"
                    className="btn btn-info mx-1 my-2"
                    onClick={this.onEdit.bind(this, category.id)}
                  >
                    <span className="fa fa-edit" />
                  </button>
                  <button
                    title="view"
                    className="btn btn-success mx-1 my-2"
                    onClick={this.onEdit.bind(this, category.id)}
                  >
                    <span className="fa fa-eye" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Listing;
