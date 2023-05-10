import React, { useState } from 'react';
import TaskList from './components/TaskList';
import Calendar from './components/Calendar';
import TaskDetails from './components/TaskDetails';
import Clock from './components/Clock';
import LogoutIcon from './components/LogoutIcon';
import './App.css';
import './styles.css';
import 'antd/dist/antd.css';

function App() {
  // Definimos los estados iniciales para la fecha seleccionada, las tareas, la tarea seleccionada y el usuario
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [user, setUser] = useState('Usuario'); // usuario por defecto

  // Función para crear una nueva tarea y agregarla al estado de tareas
  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Función para eliminar una tarea del estado de tareas
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Función para actualizar una tarea en el estado de tareas
  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    }));
  };

  // Función para seleccionar una tarea del estado de tareas
  const handleSelectTask = (taskId) => {
    setSelectedTask(tasks.find(task => task.id === taskId));
  };

  // Función para agregar detalles a una tarea existente
  const handleTaskDetails = (taskId, details) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, details: details };
      }
      return task;
    }));
  };

  // Función para agregar una fecha límite a una tarea existente
  const handleTaskDeadline = (taskId, deadline) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, deadline: deadline };
      }
      return task;
    }));
  };

  // Renderizamos la estructura de tres columnas con los componentes correspondientes
  return (
    <div className="App">
      {/* Columna izquierda con lista de tareas, calendario, reloj y usuario */}
      <div className="left-column">
        <TaskList tasks={tasks} onTaskSelect={handleSelectTask} />
        <Calendar selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        <Clock />
        <div id="user">{user}</div>
      </div>
      {/* Columna del medio con detalles de tarea seleccionada */}
      <div className="middle-column">
        {selectedTask && <TaskDetails task={selectedTask} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} onTaskDetails={handleTaskDetails} onTaskDeadline={handleTaskDeadline} />}
      </div>
      {/* Columna derecha con título del planificador de tareas y botón de logout */}
      <div className="right-column">
        <h2 className="planner-title">Mi Planificador de Tareas</h2>
        <LogoutIcon />
      </div>
    </div>
  );
}

export default App;
