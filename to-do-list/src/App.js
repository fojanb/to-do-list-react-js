// import './App.css';
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import InputComponent from "./components/InputComponent";

class App extends Component {
  state = {
    items: [],
    showItems: false,
  };
  styles = {
    display: "flex",
    flexDirection: "row",
  };
  // -----------EventHandlers <Start>---------------
  getItemHandler = (event) => {
    let items = event.target.value;
    this.setState({ items: items });
  };
  addItemHandler = () => {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = this.state.items;
    document.body.appendChild(paragraph);
  };

  // -----------EventHandlers <Finish>---------------
  render() {
    return (
      <div>
        <h2>MY LIST</h2>
        <p>Add an Item...</p>
        <InputComponent
          getItem={this.getItemHandler}
          itemEntered={this.state.items}
        />
        <button type="submit" onClick={this.addItemHandler}>
          Add
        </button>
       
      </div>
    );
  }
}

export default App;
