import { useEffect, useState } from "react";
import Task from "../Task/Task";
// ---------------------------------------------------------
const App = () => {
  // -------------------------------------------------------
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState(() => {
    // Getting stored value
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [newTask, setNewTask] = useState("");
  // -------------------------------------------------------
  useEffect(() => {
    // In order to save our data in local storage, we must stringify them first:
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // -------------------------------------------------------
  const submitHandler = (e) => {
    e.preventDefault();
    // In case if you wondering,"newTask" is equal to "e.currentTarget.value"
    if (!newTask) {
      return;
    }
    setTasks([
      ...tasks,
      {
        title: newTask,
        id: `${Date.now()}`,
        isDone: false,
      },
    ]);
    setNewTask("");
  };
  return (
    <div className="grid grid-col gap-6 justify-center items-center text-center text-light mt-32 m-auto font-bold bg-main h-auto pb-32 pt-12 rounded-lg lg:w-1/3">
      <h1 className="text-2xl font-bolder text-greeny">To Do List</h1>
      <div className="grid gap-10">
        <form
          type="submit"
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-row items-center justify-between m-0 m-auto"
        >
          <input
            className="flex w-full p-2 appearance-none outline-none bg-transparent border-b border-greeny focus:outline-none focus:bg-fbg"
            name="task"
            value={newTask}
            type="text"
            onChange={(e) => setNewTask(e.currentTarget.value)}
            placeholder="Type Here..."
            autoComplete="off"
            required
          ></input>
          <button type="submit" aria-label="Add Button" className="flex pl-5">
            Add
          </button>
        </form>
        <Task data={tasks} updateData={setTasks} />
      </div>
    </div>
  );
};

export default App;
