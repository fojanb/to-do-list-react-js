import React, { Component } from "react";
import InputComponent from "./components/InputComponent";
import "./App.css";
import "./index.css";
// *********************************************
class App extends Component {
  state = {
    items: "",
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
    // Placing a new item in a <div class="item"></div>
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    //Assign value to this div
    newItem.innerHTML = this.state.items;
    //now append it to body in html:
    document.getElementById("AppComponentDiv").appendChild(newItem);
    // And also I add an event to this <div class="item" onclick="itemRemover()">
    newItem.addEventListener("click", itemRemover);
    //Adding event handlers
    function itemRemover() {
      // test : alert('Hi');
      newItem.style.display = "none";
    }
  };
  // -----------EventHandlers <Finish>---------------
  render() {
    return (
      <div id="AppComponentDiv">
        <h3 id="AppComponentTitle">My To-Do-List</h3>
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
