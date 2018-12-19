import React, { Component } from "react";

/**
 * Add
 */
export class Add extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="category_name">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="category_name"
            placeholder="Enter Category Name"
          />
        </div>
        <div className="form-group form-check">
          <label htmlFor="category_name">Category Status</label>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Active
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Add;
