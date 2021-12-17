import React from "react";
const Task = (props) => {
  let { task } = props;
  return (
    <div className="flex items-left">
      <ul>
        {task !== "" ? (
          <li className="flex flex-row border border-greeny rounded-lg">
            {task}
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Task;
