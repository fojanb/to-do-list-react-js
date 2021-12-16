import React from "react";
const Task = (props) => {
  let { task } = props;
  return (
    <div>
      <p>{task}</p>
    </div>
  );
};

export default Task;
