import React, { useEffect, useState } from 'react';
import '../css/registroUsuario.css'

const LaboralComponent = ({onFormSwitch}) => {
  const handleInicio = () => {
    onFormSwitch('inicio');
};
    const [postulacionesRegistradas, setPostulacionesRegistradas] = useState([]);

    useEffect(() => {
      // Aquí puedes obtener las postulaciones registradas del localStorage o de cualquier otra fuente de datos
      const storedPostulaciones = JSON.parse(localStorage.getItem("postulacionesRegistradas")) || [];
      setPostulacionesRegistradas(storedPostulaciones);
    }, []);

    
    return (
        <div>
            <h1>¡Encuentra tu Oportunidad Laboral!</h1>
      <ul>
        {postulacionesRegistradas.map((postulacion, index) => (
          <li key={index}>
            <strong>Carrera:</strong> {postulacion.carreraPostu}<br />
            <strong>Facultad:</strong> {postulacion.facultadPostu}<br />
            <strong>Sueldo:</strong> {postulacion.sueldoPostu}<br />
            <strong>Jornada:</strong> {postulacion.jornada}<br />
            <strong>Detalles:</strong> {postulacion.detalles}<br />
            <hr />
          </li>
        ))}
      </ul>
      <button
                    type="button"
                    onClick={handleInicio}
                    >
                    Regresar al inicio
            </button>
        </div>
    );
};

export default LaboralComponent;
