const shopping = document.querySelector(".shopping");
const form = document.querySelector("#form");
const taskList = document.querySelector(".taskList");
let toDoList = []; //This array holds our state

const displayTask = () => {
  // First approach :
  // const list = document.createElement("li");
  // list.innerText = newTask;
  // taskList.appendChild(list);
  // Second approach :
  let newTask = toDoList
    .map(
      (task) =>
        `<li>
            <div>
                <input type="checkbox" id=${task.id}/>
                <span>${task.title}</span>
            </div>
            <button type="submit" aria-label="Delete Button" class="deleteBtn">\u00D7</button>
        </li>`
    )
    .join("");
  taskList.innerHTML = newTask;
  shopping.appendChild(taskList)
};
const submitHandler = (e) => {
  // Remember that e.currentTarget = form
  e.preventDefault();
  const task = {
    title: e.currentTarget.task.value,
    id: Date.now(),
    isDone: false,
  };
  toDoList.push(task);
  e.currentTarget.task.value = "";
  displayTask();
};

form.addEventListener("submit", submitHandler);
