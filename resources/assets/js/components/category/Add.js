import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as action from "../actions";
import Error from "./Error";

/**
 * Add
 */
export class Add extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * get value of category name input
   * and update state
   */

  onChangeCategoryName(e) {
    this.props.addCategory(e.target.value);
  }
  // handle on submit event
  onSubmit(e) {
    e.preventDefault();
    const category = {
      category_name: this.props.category_name
    };
    axios
      .post("http://localhost:8000/api/category/store", category)
      .then(res => {
        if (res.data.type === "success") {
          this.props.addCategory("", true, res.data);
        } else {
          this.props.addCategory(this.props.category_name, true, res.data);
        }
      })
      .catch(err => {
        console.log("err", err);
      });
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category_name: state.categories.category_name,
    showError: state.categories.showError,
    messages: state.categories.messages
  };
};

export default connect(
  mapStateToProps,
  action
)(Add);
