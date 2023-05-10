import React from 'react';
import { getDaysInMonth, startOfMonth, getDay } from 'date-fns';

function Calendar({ selectedDay, onDaySelect }) {
  // Obtenemos el primer día del mes actual
  const startDay = startOfMonth(selectedDay);

  // Obtenemos el número de días del mes actual
  const totalDays = getDaysInMonth(selectedDay);

  // Obtenemos el número de días de la semana del primer día del mes actual
  const startDayOfWeek = getDay(startDay);

  // Creamos un array con los días del mes actual
  const days = Array.from({ length: totalDays }, (_, index) => index + 1);

  // Creamos un array con los días en blanco para completar la primera semana del mes
  const emptyDays = Array.from({ length: startDayOfWeek }, (_, index) => null);

  // Unimos los arrays de los días en blanco y los días del mes actual
  const calendarDays = [...emptyDays, ...days];

  // Dividimos los días en arrays de 7 para representar las semanas del mes
  const weeks = Array.from({ length: calendarDays.length / 7 }, (_, index) =>
    calendarDays.slice(index * 7, index * 7 + 7)
  );

  // Manejador de evento para cuando se hace clic en un día del calendario
  const handleDayClick = (day) => {
    const newDate = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), day);
    onDaySelect(newDate);
  };

  // Generamos las filas con los días del mes
  const rows = weeks.map((week, index) => (
    <tr key={index}>
      {week.map((day, index) => (
        <td key={index} className={day ? 'calendar-day' : null} onClick={() => handleDayClick(day)}>
          {day}
        </td>
      ))}
    </tr>
  ));

  // Generamos la tabla del calendario
  return (
    <table className="calendar">
      <thead>
        <tr>
          <th>Domingo</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Calendar;
