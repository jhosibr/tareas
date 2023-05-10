import React, { useState } from "react";
import { DatePicker, TimePicker } from "antd";
import "antd/dist/antd.css";
import styles from "./TaskForm.css";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [dueTime, setDueTime] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      title,
      description,
      dueDate: dueDate ? dueDate.format("YYYY-MM-DD") : null,
      dueTime: dueTime ? dueTime.format("HH:mm") : null,
    };
    addTask(task);
    setTitle("");
    setDescription("");
    setDueDate(null);
    setDueTime(null);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <h2>Agregar Tarea</h2>
      <label>
        Título:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Descripción:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Fecha límite:
        <DatePicker onChange={(value) => setDueDate(value)} />
      </label>
      <label>
        Hora límite:
        <TimePicker
          format="HH:mm"
          minuteStep={15}
          onChange={(value) => setDueTime(value)}
        />
      </label>
      <button type="submit">Agregar tarea</button>
    </form>
  );
}

export default TaskForm;
