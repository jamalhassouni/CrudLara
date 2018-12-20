import React, { Component } from "react";
import axios from "axios";
/**
 * Edit
 */
export class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      category_name: "",
      messages: {},
      showError: false
    };
  }
  componentDidMount() {
    // Fetch data from api
    axios
      .get(
        `http://localhost:8000/api/category/edit/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({ category_name: response.data.name });
      });
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
      .put(
        `http://localhost:8000/api/category/update/${
          this.props.match.params.id
        }`,
        category
      )
      .then(res => {
        if (res.data.type === "success") {
          this.setState({
            showError: true,
            messages: res.data
          });
        } else {
          this.setState({
            showError: true,
            messages: res.data
          });
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  // handle on click close alert event
  handleClose() {
    this.setState({
      showError: false
    });
  }
  // handle errors messages
  handleErrors() {
    switch (this.state.messages.type) {
      case "success":
        return (
          <div className="alert alert-success " role="alert">
            {this.state.messages.message}
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
            {this.state.messages.message.category_name.map(err => {
              return err;
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
        {this.state.showError && this.handleErrors()}
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
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Edit;
