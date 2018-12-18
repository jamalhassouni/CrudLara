import React, { Component } from "react";

/**
 * Add
 */
export class Add extends Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="category_name">Category Name</label>
          <input
            type="text"
            class="form-control"
            id="category_name"
            placeholder="Enter Category Name"
          />
        </div>
        <div class="form-group form-check">
          <label for="category_name">Category Status</label>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Active
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Add;
