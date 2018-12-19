import React, { Component } from "react";
import axios from "axios";
/**
 * Add
 */
export class Add extends Component {
  constructor() {
    super();
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      category_name: ""
    };
  }

  /**
   * get value of category name input
   * and update state
   */

  onChangeCategoryName(e) {
    this.setState({
      category_name: e.target.value
    });
  }
  // handle on submit event
  onSubmit(e) {
    e.preventDefault();
    const category = {
      category_name: this.state.category_name
    };
    axios
      .post("http://localhost:8000/category/store", category)
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="category_name">Category Name</label>
          <input
            onChange={this.onChangeCategoryName}
            value={this.state.category_name}
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
    );
  }
}

export default Add;
