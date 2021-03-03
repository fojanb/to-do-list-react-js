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
    // Creating a new <div></div> element in our HTML(document)
    let newItem = document.createElement("div");
    // Assigning a class to it <div class="item"></div>
    newItem.classList.add("item");
    //Assign value to it <div class="item">${this.state.items}</div>
    newItem.innerHTML = "♡ " + this.state.items;
    //now append it to AppComponentDiv in HTML:
    document.getElementById("AppComponentDiv").appendChild(newItem);

    let removeButton = document.createElement("div");
    removeButton.classList.add("removeBtn");
    removeButton.innerHTML = "〤";
    newItem.appendChild(removeButton);

    // And also I add an event to this <div class="item" onclick="itemRemover()">
    removeButton.addEventListener("click", itemRemover);
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
        <h3 id="AppComponentTitle">
          <p id="myMove1">✿</p>My To-Do-List<p id="myMove2">✿</p>
        </h3>
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
