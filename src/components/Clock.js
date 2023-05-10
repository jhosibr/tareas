// components/Clock.js

import React, { useState, useEffect } from 'react';
import moment from 'moment';

function RightColumn() {
return (
<div className="right-column">
<Clock />
</div>
);
}

function Clock() {
// Definimos el estado "currentTime" y la función "setCurrentTime" para actualizarlo
const [currentTime, setCurrentTime] = useState(moment().format('h:mm:ss A'));

// Usamos useEffect para ejecutar un intervalo cada segundo y actualizar el estado "currentTime"
useEffect(() => {
// Usamos setInterval para ejecutar la función cada segundo
const intervalId = setInterval(() => {
// Actualizamos el estado "currentTime" con la hora actual formateada con moment.js
setCurrentTime(moment().format('h:mm:ss A'));
}, 1000);
// Usamos la función de retorno para limpiar el intervalo cuando se desmonte el componente
return () => clearInterval(intervalId);
}, []);

// Retornamos el elemento que muestra el tiempo actual
return (
<div id="clock">{currentTime}</div>
);
}

// Exportamos el componente Clock por defecto
export default Clock;