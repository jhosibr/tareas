import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details">
      <h3>Detalles de la tarea:</h3>
      <p><strong>Título:</strong> {task.title}</p>
      <p><strong>Descripción:</strong> {task.description}</p>
      <p><strong>Fecha:</strong> {task.date}</p>
      <p><strong>Hora:</strong> {task.time}</p>
    </div>
  );
}

export default TaskDetails;
