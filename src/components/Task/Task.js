import React from "react";
const Task = (props) => {
  let { task } = props;
  // console.log(task);
  const taskList = task.map((item) => JSON.parse(item));
  // console.log(taskList)
  return (
    <div className="flex items-left">
      <ul>
        {taskList !== undefined
          ? taskList.map((item, index) => (
              <li
                className="flex flex-row border border-greeny rounded-lg"
                key={index}
              >
                {item.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Task;
