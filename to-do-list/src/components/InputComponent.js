import React, { Component } from "react";
import "./InputComponent.css";
// *********************************************
class InputComponent extends Component {
  state = this.props.itemEntered;
  render() {
    return (
      <div id="InputComponentDiv">
        <input
          id="InputComponentFieldItem"
          type="text"
          placeholder="Type Item Here..."
          onChange={this.props.getItem}
        ></input>
      </div>
    );
  }
}

export default InputComponent;
