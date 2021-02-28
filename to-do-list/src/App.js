// import './App.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputComponent from "./components/InputComponent";

class App extends Component {
  state = {
    items: [],
  };

  // -----------EventHandlers <Start>---------------
  getItemHandler = (event) => {
    let items = event.target.value;
    this.setState({ items: items });
  };

  
  // -----------EventHandlers <Finish>---------------

  render() {
    
    return (
      <div>
        <h2>MY LIST</h2>
        <p>Add an Item...</p>
        <InputComponent
          getItem={this.getItemHandler}
          addItem={this.addItemHandler}
        />
      </div>
    );
  }
}

export default App;
