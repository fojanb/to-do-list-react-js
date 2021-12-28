import React from "react";

const Task = (props) => {
  let { data } = props;
  return (
    <div className="flex items-left">
      <ul>
        {data !== undefined
          ? data.map((item, index) => (
              <li
                className="flex flex-row justtify-center items-center relative border border-greeny rounded-lg w-60 mb-12 p-8"
                key={index}
              >
                <div className="flex flex-row justify-center items-center">
                  <input type="checkbox" id={item.id} className="m-0 m-auto" />
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
