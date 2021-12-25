import { useEffect, useState } from "react";
import Form from "../components/Form/Form";

const App = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(task));
  }, [task]);
  const submitHandler = (e) => {
    e.preventDefault();
    let newTask = {
      id: `${Date.now()}`,
      title: `${e.currentTarget.task.value}`,
      isDone: false,
    };
    /* Is newTask an object? If so you can't just pass it as a child, 
    you need to "stringify" it if you want to see the whole object, 
    or render individual properties*/
    setTask((prevTask) => [...prevTask, JSON.stringify(newTask)]);
    e.currentTarget.task.value = "";
  };
  const updatingTask = (item) => {
    console.log(`Task is getting updated > ${item}`);
  };
  return (
    <div className="grid grid-col gap-6 justify-center items-center text-center text-light mt-32 m-auto font-bold bg-main h-auto pb-32 pt-12 rounded-lg lg:w-1/3">
      <h1 className="text-2xl font-bolder text-greeny">To Do List</h1>
      <Form submit={submitHandler} data={task} updater={updatingTask} />
    </div>
  );
};

export default App;
