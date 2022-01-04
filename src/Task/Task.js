import React from "react";

const Task = (props) => {
  let { data, updateData } = props;
  const deleteTask = (e) => {
    const target = data.findIndex((task) => task.id === e.currentTarget.id);
    data.splice(target, 1);
    updateData([...data]);
  };
  return (
    <div className="flex items-left">
      <ul>
        {data !== undefined
          ? data.map((task, index) => (
              <li
                className="flex flex-row justtify-center items-center relative border border-greeny rounded-lg w-60 mb-12 p-8"
                key={index}
              >
                <div className="flex flex-row justify-center items-center">
                  <input type="checkbox" className="m-0 m-auto" />
                  <span className="pl-1 m-0 m-auto">{task.title}</span>
                </div>
                <button
                  onClick={(e) => deleteTask(e)}
                  id={task.id}
                  className="flex absolute top-8 left-52 m-0 m-auto justtify-center items-center"
                >
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
