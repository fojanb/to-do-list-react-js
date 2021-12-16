import React from "react";
import Task from "../Task/Task";
const Form = (props) => {
  return (
    <div>
      <form
        type="submit"
        onSubmit={props.submit}
        className="flex flex-row items-center space-between m-0 m-auto bg-red-500"
      >
        <input
          className="flex w-full rounded"
          name="task"
          type="text"
          placeholder="Type Here..."
          autoComplete="off"
          required
        ></input>
        <button type="submit" aria-label="Add Button" className="flex">
          Add
        </button>
      </form>
      <Task task={props.data}/>
    </div>
  );
};

export default Form;
