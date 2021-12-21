import { useState } from "react";
import Form from "../components/Form/Form";

const App = () => {
  const [task, setTask] = useState([]);
  const save = (IsNewTask) => {
    localStorage.setItem("list", IsNewTask);
    return;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    /* Is newTask an object? If so you can't just pass it as a child, 
    you need to stringify it if you want to see the whole object, 
    or render individual properties*/
    let newTask = {
      id: `${Date.now()}`,
      title: `${e.currentTarget.task.value}`,
    };
    setTask((prevTask) => [...prevTask, JSON.stringify(newTask)]);
    save(JSON.stringify(newTask));
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
