import React from "react";
const Task = (props) => {
  let { task } = props;
  return (
    <div className="flex items-left">
      <p>{task}</p>
    </div>
  );
};

export default Task;
