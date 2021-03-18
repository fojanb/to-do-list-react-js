document.addEventListener("DOMContentLoaded", () => {
//   const tasks = document.querySelector("#tasks");
  document.getElementById("task").addEventListener("change", addTask);
  function addTask() {
    let task = document.getElementById("task").value;
    document.getElementById("tasks").innerHTML = task;
  }
});
