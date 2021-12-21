import React from "react";
const Task = (props) => {
  let { task } = props;
  // console.log("Stringified State:",task);
  const taskList = task.map((item) => JSON.parse(item));
  // console.log("Parsed State:",taskList);
  return (
    <div className="flex items-left">
      <ul>
        {taskList !== undefined
          ? taskList.map((item, index) => (
              <li
                className="flex flex-row justtify-center items-center border border-greeny rounded-lg w-60 mb-12 p-8"
                key={index}
              >
                <div className="flex flex-row justify-center items-center">
                  <input type="checkbox" className="m-0 m-auto"/>
                  <span className="pl-1 m-0 m-auto">{item.title}</span>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Task;
