import { useState, useMemo } from "react";

function TaskGenerator() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const addTasks = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const filteredTasks = useMemo(() => {
    if (filter === "COMPLETED") {
      return tasks.filter((t) => t.completed);
    }

    if (filter === "PENDING") {
      return tasks.filter((t) => !t.completed);
    }

    return tasks;
  }, [tasks, filter]);

  
  const toggleComplete = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
    setTasks(updated);
  };

  const deleteTasks = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <input
            type="text"
            placeholder="Enter new Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTasks} className="btn">
            Add
          </button>
        </div>
        <div className="filter-btn">
          <button onClick={() => setFilter("ALL")}> ALL</button>
          <button onClick={() => setFilter("COMPLETED")}> COMPLETED</button>
          <button onClick={() => setFilter("PENDING")}> PENDING</button>
        </div>
        {filteredTasks.length ===0 ? (
        <p>
          {
            filter ==="COMPLETED" ? "No completed tasks" :
            filter ==="PENDING" ? " No pending tasks" :
            "All tasks"
          }
        </p>
        ):
        filteredTasks.map((task) => (
          <ul className="ul-list" key={task.id}>
            <li>
              <span> {task.text}</span>
            </li>
            <div className="ul-btn">
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Completed" : "Pending"}
              </button>
              <button onClick={() => deleteTasks(task.id)}>Delete</button>
            </div>
          </ul>
        ))}
      
      </div>
    </>
  );
}
export default TaskGenerator;
