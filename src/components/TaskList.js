import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const date = task.date ? task.date.toDate() : null;
    const time = task.time ? task.time.toDate() : null;
    setTasks([...tasks, { id: tasks.length + 1, ...task, dueDate: date, dueTime: time }]);
  }
  

  function editTask(id, updatedTask) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="task-list">
      <h2>Tareas</h2>
      <ul>
        {tasks
          .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
          .map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Fecha límite: {task.dueDate}</p>
              <p>Hora límite: {new Date(task.dueTime).toLocaleTimeString()}</p>
              {!task.completed && (
                <>
                  <button onClick={() => completeTask(task.id)}>Completar</button>
                  <button onClick={() => editTask(task.id, task)}>Editar</button>
                </>
              )}
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default TaskList;
