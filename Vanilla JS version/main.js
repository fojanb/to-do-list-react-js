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
    document.getElementById("wrapper").appendChild(holder).innerHTML ="♡ "+ task;
    // ------------------------------------*
    let btn = document.createElement("button");
    btn.classList.add("btnStyle");
    btn.innerText = "-";
    // So far : <button class="btnStyle">-</button>
    holder.appendChild(btn);
  }

});
