import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

/**
 * Listing
 */
export class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    // Fetch data from api
    axios.get("http://localhost:8000/api/category").then(response => {
      this.setState({
        categories: response.data.data,
        activePage: response.data.current_page,
        itemsCountPerPage: response.data.per_page,
        totalItemsCount: response.data.total
      });
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
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    axios
      .get(`http://localhost:8000/api/category?page=${pageNumber}`)
      .then(response => {
        this.setState({
          categories: response.data.data,
          activePage: response.data.current_page,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total
        });
      });
  }
  render() {
    return (
      <div>
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
                    <Link
                      title="edit"
                      className="btn btn-info mx-1 my-2"
                      to={`/category/edit/${category.id}`}
                    >
                      <span className="fa fa-edit" />
                    </Link>
                    <button title="view" className="btn btn-success mx-1 my-2">
                      <span className="fa fa-eye" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={this.state.pageRangeDisplayed}
            itemClass="page-item"
            linkClass="page-link"
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Listing;
