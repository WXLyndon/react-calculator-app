import ACTIONS from "./actions";

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
    default:
      return state;
  }
};

export default reducer;
