import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import * as action from "../actions";
/**
 * Listing
 */
export class Listing extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    // Fetch data from api
    axios.get("http://localhost:8000/api/category").then(response => {
      const categories = response.data.data;
      const activePage = response.data.current_page;
      const per_page = response.data.per_page;
      const total = response.data.total;
      // update categories state
      this.props.getCategories(categories, activePage, per_page, total, 3);
    });
  }
  // Delete category
  onDelete(id) {
    axios
      .delete(`http://localhost:8000/api/category/delete/${id}`)
      .then(response => {
        // update categories state
        this.props.categories(response.data.data);
      });
  }
  handlePageChange(pageNumber) {
    axios
      .get(`http://localhost:8000/api/category?page=${pageNumber}`)
      .then(response => {
        const categories = response.data.data;
        const activePage = response.data.current_page;
        const per_page = response.data.per_page;
        const total = response.data.total;
        // update categories state
        this.props.getCategories(categories, activePage, per_page, total, 3);
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
            {this.props.data.categories &&
              this.props.data.categories.map((category, index) => {
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
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Pagination
            activePage={this.props.data.activePage}
            itemsCountPerPage={this.props.data.itemsCountPerPage}
            totalItemsCount={this.props.data.totalItemsCount}
            pageRangeDisplayed={this.props.data.pageRangeDisplayed}
            itemClass="page-item"
            linkClass="page-link"
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.categories.data
  };
};

export default connect(
  mapStateToProps,
  action
)(Listing);
