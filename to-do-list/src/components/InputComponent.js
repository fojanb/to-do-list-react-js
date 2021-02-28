import React, { Component } from "react";
import ReactDOM from "react-dom";

class InputComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type Item Here..."
          onChange={this.props.getItem}
        ></input>
        <button onClick={this.props.addItem}>Add</button>
        
       
      </div>
    );
  }
}

export default InputComponent;
