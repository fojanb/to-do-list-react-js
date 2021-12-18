import React from "react";
import Task from "../Task/Task";
const Form = (props) => {
  const buttonHandler = () =>{
    console.log(props)
  }
  return (
    <div className="grid gap-10">
      <form
        type="submit"
        onSubmit={props.submit}
        className="flex flex-row items-center justify-between m-0 m-auto"
      >
        <input
          className="flex w-full p-2 appearance-none outline-none bg-transparent border-b border-greeny focus:outline-none focus:bg-fbg"
          name="task"
          type="text"
          placeholder="Type Here..."
          autoComplete="off"
          required
        ></input>
        <button type="submit" onClick={buttonHandler} aria-label="Add Button" className="flex pl-5">
          Add
        </button>
      </form>
      <Task task={props.data} />
    </div>
  );
};

export default Form;
