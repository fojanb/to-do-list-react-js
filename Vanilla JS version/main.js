document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("task").addEventListener("change", addTask);
  function addTask() {
    //from input field
    let task = document.getElementById("task").value;
    // ------------------------------------*
    let holder = document.createElement("div");
    holder.classList.add("task");
    // So far : <div class="tasks"></div>
    // ------------------------------------*
    document.getElementById("wrapper").appendChild(holder).innerHTML =
      "♡ " + task;
    // ------------------------------------*
    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButtonStyle");
    removeButton.innerText = "-";
    // So far : <button class="removeButtonStyle">-</button>
    holder.appendChild(removeButton);
  }
 
});
