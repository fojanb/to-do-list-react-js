import React from "react";
import Task from "../Task/Task";
const Form = (props) => {
  return (
    <div className="grid gap-10">
      <form type="submit" onSubmit={props.submit} className="flex flex-row items-center justify-between m-0 m-auto">
        <input
          className="flex w-full rounded p-2"
          name="task"
          type="text"
          placeholder="Type Here..."
          autoComplete="off"
          required
        ></input>
        <button type="submit" aria-label="Add Button" className="flex pl-5">
          Add
        </button>
      </form>
      <Task task={props.data} />
    </div>
  );
};

export default Form;
