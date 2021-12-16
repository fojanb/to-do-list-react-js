import { useState } from "react";
import Form from "../components/Form/Form";

const App = () => {
  const [task, setTask] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let newTask = e.currentTarget.task.value;
    setTask(newTask);
    localStorage.setItem("list", JSON.stringify(newTask));
    e.currentTarget.task.value = "";
  };
  return (
    <div className="grid grid-col gap-6 justify-center items-center text-center text-light mt-32 m-auto font-bold bg-main border border-greeny h-auto pb-32 pt-12 rounded-lg lg:w-1/3">
      <h1 className="text-2xl font-bolder">To Do List</h1>
      <Form submit={submitHandler} data={task} />
    </div>
  );
};

export default App;
