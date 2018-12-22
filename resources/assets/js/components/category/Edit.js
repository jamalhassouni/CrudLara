import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as action from "../actions";
import Error from "./Error";
/**
 * Edit
 */
export class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeCategoryStatus = this.onChangeCategoryStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    // Fetch data from api
    axios
      .get(
        `http://localhost:8000/api/category/edit/${this.props.match.params.id}`
      )
      .then(response => {
        this.props.editCategory(
          response.data.name,
          response.data.active,
          false,
          {}
        );
      });
  }

  /**
   * get value of category name input
   * and update state
   */

  onChangeCategoryName(e) {
    this.props.editCategory(
      e.target.value,
      this.props.category_status,
      false,
      {}
    );
  }
  onChangeCategoryStatus(e) {
    this.props.editCategory(
      this.props.category_name,
      e.target.value,
      false,
      {}
    );
  }
  // handle on submit event
  onSubmit(e) {
    e.preventDefault();
    const category = {
      category_name: this.props.category_name,
      category_status: this.props.category_status
    };
    axios
      .put(
        `http://localhost:8000/api/category/update/${
          this.props.match.params.id
        }`,
        category
      )
      .then(res => {
        console.log(res.data);
        this.props.editCategory(
          this.props.category_name,
          this.props.category_status,
          true,
          res.data
        );
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  // handle on click close alert event
  handleClose() {
    this.props.displayMessage(false);
  }
  // handle errors messages
  handleErrors() {
    switch (this.props.messages.type) {
      case "success":
        return (
          <div className="alert alert-success " role="alert">
            {this.props.messages.message}
            <button
              onClick={this.handleClose.bind(this)}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        );
        break;
      case "error":
        return (
          <div className="alert alert-danger" role="alert">
            {this.props.messages.message.category_name &&
              this.props.messages.message.category_name.map((err, index) => {
                return <p key={`errName-${index}`}>{err}</p>;
              })}

            {this.props.messages.message.category_status &&
              this.props.messages.message.category_status.map((err, index) => {
                return <p key={`errStatus-${index}`}>{err}</p>;
              })}
            <button
              onClick={this.handleClose.bind(this)}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        );
        break;
      default:
        return;
    }
  }
  render() {
    return (
      <div>
        <Error />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="category_name">Category Name</label>
            <input
              onChange={this.onChangeCategoryName}
              value={this.props.category_name}
              type="text"
              className="form-control"
              id="category_name"
              placeholder="Enter Category Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              value={this.props.category_status}
              id="status"
              onChange={this.onChangeCategoryStatus}
              className="form-control"
            >
              <option value="">default</option>
              <option value="1">Active</option>
              <option value="0">Inctive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category_name: state.categories.category_name,
    category_status: state.categories.category_status,
    showError: state.categories.showError,
    messages: state.categories.messages
  };
};

export default connect(
  mapStateToProps,
  action
)(Edit);
