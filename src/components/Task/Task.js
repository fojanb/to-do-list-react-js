import React from "react";
const Task = (props) => {
  let { task } = props;
  // console.log("Stringified State:",task);
  const taskList = task.map((item) => JSON.parse(item));
  console.log("Parsed State:", taskList);
  const statusHandler = (e) => {
    let targetTask = taskList.find((item) => item.id === e.currentTarget.id);
    targetTask.isDone = !targetTask.isDone;
    localStorage.setItem("list", JSON.stringify(taskList));
  };
  const deleteHandler = (e) => {
    if (e.target.matches("button")) {
      console.log("deleteing");
      
    }
  };
  return (
    <div className="flex items-left">
      <ul>
        {taskList !== undefined
          ? taskList.map((item, index) => (
              <li
                className="flex flex-row justtify-center items-center relative border border-greeny rounded-lg w-60 mb-12 p-8"
                key={index}
                onClick={(e) => deleteHandler(e)}
              >
                <div className="flex flex-row justify-center items-center">
                  <input
                    type="checkbox"
                    id={item.id}
                    onChange={(e) => statusHandler(e)}
                    className="m-0 m-auto"
                  />
                  <span className="pl-1 m-0 m-auto">{item.title}</span>
                </div>
                <button className="flex absolute top-8 left-52 m-0 m-auto justtify-center items-center">
                  &times;
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Task;
