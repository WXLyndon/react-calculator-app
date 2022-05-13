import React, { Component } from "react";
import { connect } from "react-redux";
import ACTIONS from "../../../redux/actions";

class OperationButton extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={() => {
          this.props.chooseOperation(this.props.operation);
        }}
      >
        {this.props.operation}
      </button>
    );
  }
}

const mapDispatchToProps = {
  chooseOperation: (operation) => {
    return { type: ACTIONS.CHOOSE_OPERATION, operation: operation };
  },
};

export default connect(null, mapDispatchToProps)(OperationButton);
