import ACTIONS from "./actions";

const evaluate = (state) => {
  let { lastOperand, currentOperand, operation } = state;
  let last = parseFloat(lastOperand);
  let current = parseFloat(currentOperand);

  let res = "";
  switch (operation) {
    case "+":
      res = last + current;
      break;
    case "-":
      res = last - current;
      break;
    case "×":
      res = last * current;
      break;
    case "÷":
      res = last / current;
  }
  return res.toString();
};

const reducer = (
  state = {
    currentOperand: "",
    lastOperand: "",
    operation: "",
  },
  action
) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      // The current operand can have only one leading zero.
      if (state.currentOperand === "0" && action.digit === "0") {
        return state;
      }
      // If the current operand is zero and the action.digit is not ".", the first digit replace the zero.
      if (state.currentOperand === "0" && action.digit !== ".") {
        return {
          ...state,
          currentOperand: action.digit,
        };
      }
      // If the current operand already has a ".", the action.digit is ".", the state should remain unchanged.
      if (state.currentOperand.includes(".") && action.digit === ".") {
        return state;
      }
      // If the current operand is empty, the action.digit is ".", then the current operand should be "0.".
      if (action.digit === "." && state.currentOperand === "") {
        return {
          ...state,
          currentOperand: "0.",
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand + action.digit,
      };

    case ACTIONS.DELETE_DIGIT:
      // If the current operand is empty, the state should remain unchanged.
      if (state.currentOperand === "") {
        return state;
      } else {
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };
      }

    case ACTIONS.CHOOSE_OPERATION:
      // If the current and the last operand are both empty, the state should remain unchanged.
      if (state.currentOperand === "" && state.lastOperand === "") {
        return state;
      }
      // If the last operand is empty, the last operand should be the current operand.
      if (state.lastOperand === "") {
        return {
          ...state,
          lastOperand: state.currentOperand,
          currentOperand: "",
          operation: action.operation,
        };
      }
      // If the current operand is empty, just change the operation.
      if (state.currentOperand === "") {
        return {
          ...state,
          operation: action.operation,
        };
      }
      // If the current operand, the last operand and the operation are not empty, and the new operation is input,
      // then the last operand should be evaluated from the current state.
      return {
        ...state,
        lastOperand: evaluate(state),
        operation: action.operation,
        currentOperand: "",
      };

    case ACTIONS.CLEAR_ALL:
      return {
        ...state,
        currentOperand: "",
        lastOperand: "",
        operation: "",
      };
    default:
      return state;
  }
};

export default reducer;
