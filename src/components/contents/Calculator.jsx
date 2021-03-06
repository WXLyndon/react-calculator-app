import React, { Component } from "react";
import ContentBase from "./ContentBase";
import { connect } from "react-redux";
import DigitButton from "./calculator/DigitButton";
import ACTIONS from "../../redux/actions";
import OperationButton from "./calculator/OperationButton";

class Calculator extends Component {
  state = {
    formatter: Intl.NumberFormat("en-US").format,
  };

  format = (number) => {
    const [integer, decimal] = number.toString().split(".");
    if (decimal === undefined) {
      return this.state.formatter(number);
    }
    return `${this.state.formatter(integer)}.${decimal}`;
  };
  render() {
    return (
      <ContentBase>
        <div className="calculator">
          <div className="output">
            <div className="last-output">
              {this.format(this.props.lastOperand)} {this.props.operation}
            </div>
            <div className="current-output">
              {this.format(this.props.currentOperand)}
            </div>
          </div>
          <button className="buttion-ac" onClick={this.props.clear}>
            AC
          </button>
          <button onClick={this.props.deleteDigit}>Del</button>
          <OperationButton operation={"÷"} />
          <DigitButton digit={"7"} />
          <DigitButton digit={"8"} />
          <DigitButton digit={"9"} />
          <OperationButton operation={"×"} />
          <DigitButton digit={"4"} />
          <DigitButton digit={"5"} />
          <DigitButton digit={"6"} />
          <OperationButton operation={"-"} />
          <DigitButton digit={"1"} />
          <DigitButton digit={"2"} />
          <DigitButton digit={"3"} />
          <OperationButton operation={"+"} />
          <DigitButton digit={"0"} />
          <DigitButton digit={"."} />
          <button className="button-equal" onClick={this.props.evaluate}>
            =
          </button>
        </div>
      </ContentBase>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    currentOperand: state.currentOperand,
    lastOperand: state.lastOperand,
    operation: state.operation,
  };
};

const mapDispatchToProps = {
  deleteDigit: () => {
    return { type: ACTIONS.DELETE_DIGIT };
  },
  clear: () => {
    return { type: ACTIONS.CLEAR_ALL };
  },
  evaluate: () => {
    return { type: ACTIONS.EVALUATE };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
