import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((_, index) => index !== id);
    setTasks(updatedTasks);
  }

  function handleMoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    } else alert("This task is already at the top.");
  }

  function handleMoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    } else alert("This task is already at the bottom.");
  }

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your task here..."
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <hr />
      <div>
        {tasks.length === 0 && <h4>No tasks available.</h4>}
        {tasks.length > 0 && <h4>Here are your tasks:</h4>}
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete❌</button>
              <button onClick={() => handleMoveTaskUp(index)}>
                Priority Up⬆️
              </button>
              <button onClick={() => handleMoveTaskDown(index)}>
                Priority Down⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
