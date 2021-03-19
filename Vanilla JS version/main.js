document.addEventListener("DOMContentLoaded", () => {
  //   const tasks = document.querySelector("#tasks");
  document.getElementById("task").addEventListener("change", addTask);
  function addTask() {
    let task = document.getElementById("task").value;

    let holder = document.createElement("div");
    holder.classList.add("tasks");
    // so far : <div class="tasks"></div>
    document.getElementById('wrapper').appendChild(holder).innerHTML = task;

  }
});
