import React, { Component } from "react";
import ContentBase from "./ContentBase";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <ContentBase>
        <div className="calculator">
          <div className="output">
            <div className="last-output">10</div>
            <div className="current-output">20665465465465461321</div>
          </div>
          <button className="buttion-ac">AC</button>
          <button>Del</button>
          <button>/</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>0</button>
          <button>.</button>
          <button className="button-equal">=</button>
        </div>
      </ContentBase>
    );
  }
}

export default Calculator;
