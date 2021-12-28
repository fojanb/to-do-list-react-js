import { useEffect, useState } from "react";

const App = () => {
  // -------------------------------------------------------
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  // -------------------------------------------------------
  const addTask = (task) => setTasks([...tasks, task]);
  // -------------------------------------------------------
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasks));
  }, [tasks]);
  // -------------------------------------------------------

  const submitHandler = (e) => {
    e.preventDefault();
    // newTask = e.currentTarget.value
    if (!newTask) {
      return;
    }
    addTask({
      title: newTask,
      id: Date.now(),
      isDone: false,
    });
    setNewTask("");
  };
  // const updatingTask = (item) => {
  //   console.log(`Task is getting updated > ${item}`);
  // };
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
        {/* Task */}
        <div className="flex items-left">
          <ul>
            {tasks !== undefined
              ? tasks.map((item, index) => (
                  <li
                    className="flex flex-row justtify-center items-center relative border border-greeny rounded-lg w-60 mb-12 p-8"
                    key={index}
                  >
                    <div className="flex flex-row justify-center items-center">
                      <input
                        type="checkbox"
                        id={item.id}
                        className="m-0 m-auto"
                      />
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
      </div>
    </div>
  );
};

export default App;
