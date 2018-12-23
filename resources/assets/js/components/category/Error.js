import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions";
/**
 * Error
 */
export class Error extends Component {
  constructor(props) {
    super(props);
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
    return this.props.showError && this.handleErrors();
  }
}

const mapStateToProps = state => {
  return {
    showError: state.categories.showError,
    messages: state.categories.messages
  };
};

export default connect(
  mapStateToProps,
  action
)(Error);
