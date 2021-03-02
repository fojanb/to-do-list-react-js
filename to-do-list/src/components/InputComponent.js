import React, { Component } from "react";
// *********
class InputComponent extends Component {
  state = this.props.itemEntered;
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type Item Here..."
          onChange={this.props.getItem}
        ></input>
      </div>
    );
  }
}

export default InputComponent;
