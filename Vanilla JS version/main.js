const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("#form");
const task = document.querySelector("#task");
task.addEventListener("change", () => {
  let newTask = task.value;
  const holder = document.createElement("div");
  holder.classList.add("task");
  wrapper.appendChild(holder).innerHTML = newTask;
  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButtonStyle");
  removeButton.innerText = "Delete";
  holder.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    holder.style.display = "none";
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  task.value = "";
});
