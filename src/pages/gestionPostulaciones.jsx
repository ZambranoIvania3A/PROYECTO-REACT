import React, { useEffect, useState } from 'react';

function Postulaciones(props) {
  const [carreraPostu, setCarreraPostu] = useState('');
  const [facultadPostu, setFacultadPostu] = useState('Facultad 1');
  const [sueldoPostu, setSueldoPostu] = useState('');
  const [jornada, setJornada] = useState('');
  const [detalles, setDetalles] = useState('');
  const [postulacionesRegistradas, setPostulacionesRegistradas] = useState([]);

  useEffect(() => {
    actualizarListaPostulaciones();
  }, []);

  function registrarPostulacion() {
    if (!carreraPostu || !sueldoPostu || !jornada) {
      alert("Por favor, complete los campos obligatorios.");
      return;
    }

    if (isNaN(parseFloat(sueldoPostu))) {
      alert("El sueldo debe ser un número válido.");
      return;
    }

    if (detalles.length > 500) {
      alert("Los detalles no pueden exceder los 500 caracteres.");
      return;
    }

    const nuevaPostulacion = {
      carreraPostu: carreraPostu,
      facultadPostu: facultadPostu,
      sueldoPostu: sueldoPostu,
      jornada: jornada,
      detalles: detalles
    };

    const updatedPostulaciones = [...postulacionesRegistradas, nuevaPostulacion];
    setPostulacionesRegistradas(updatedPostulaciones);
    localStorage.setItem("postulacionesRegistradas", JSON.stringify(updatedPostulaciones));

    limpiarCampos();
    actualizarListaPostulaciones();
  }

  function actualizarListaPostulaciones() {
    const storedPostulaciones = JSON.parse(localStorage.getItem("postulacionesRegistradas")) || [];
    setPostulacionesRegistradas(storedPostulaciones);
  }

  function eliminarPostulacion(index) {
    const updatedPostulaciones = [...postulacionesRegistradas];
    updatedPostulaciones.splice(index, 1);
    setPostulacionesRegistradas(updatedPostulaciones);
    localStorage.setItem("postulacionesRegistradas", JSON.stringify(updatedPostulaciones));
  }

  function limpiarCampos() {
    setCarreraPostu('');
    setFacultadPostu('Facultad 1');
    setSueldoPostu('');
    setJornada('');
    setDetalles('');
  }



  const [postulacionesRecibidas, setPostulacionesRecibidas] = useState([]);
  const [postulacionesAceptadas, setPostulacionesAceptadas] = useState([]);

  useEffect(() => {
      mostrarPostulacionesRecibidas();
      mostrarPostulacionesAceptadas();
  }, []);

  function aceptarPostulacion(index) {
      const postulacion = postulacionesRecibidas[index];

      const nuevasAceptadas = [...postulacionesAceptadas, postulacion];
      setPostulacionesAceptadas(nuevasAceptadas);

      const nuevasRecibidas = postulacionesRecibidas.filter((_, i) => i !== index);
      setPostulacionesRecibidas(nuevasRecibidas);

      localStorage.setItem("postulacionesAceptadas", JSON.stringify(nuevasAceptadas));
      localStorage.setItem("servicios", JSON.stringify(nuevasRecibidas));
  }

  function mostrarPostulacionesRecibidas() {
      const recibidas = JSON.parse(localStorage.getItem("servicios")) || [];
      setPostulacionesRecibidas(recibidas);
  }

  function mostrarPostulacionesAceptadas() {
      const aceptadas = JSON.parse(localStorage.getItem("postulacionesAceptadas")) || [];
      setPostulacionesAceptadas(aceptadas);
  }

  function borrarPostulacionRecibida(index) {
      const nuevasRecibidas = postulacionesRecibidas.filter((_, i) => i !== index);
      setPostulacionesRecibidas(nuevasRecibidas);
      localStorage.setItem("servicios", JSON.stringify(nuevasRecibidas));
  }

  function borrarPostulacionAceptada(index) {
      const nuevasAceptadas = postulacionesAceptadas.filter((_, i) => i !== index);
      setPostulacionesAceptadas(nuevasAceptadas);
      localStorage.setItem("postulacionesAceptadas", JSON.stringify(nuevasAceptadas));
  }



  return (
    <>
  <h1>Registro de postulación</h1>
  {/* Formulario para registrar una postulación */}
  {/* Formulario para registrar una postulación */}
  <form id="registroForm">
        <label htmlFor="carreraPostu">Carrera:</label>
        <input
          type="text"
          id="carreraPostu"
          value={carreraPostu}
          onChange={(e) => setCarreraPostu(e.target.value)}
          required
        />
        <label htmlFor="facultadPostu">Facultad:</label>
        <select
          id="facultadPostu"
          value={facultadPostu}
          onChange={(e) => setFacultadPostu(e.target.value)}
          required
        >
          <option value="seleccionar">Áreas</option>
          <option value="Facultad 1">Facultad de ingenieria</option>
          <option value="Facultad 2">Facultad Licenciaturas</option>
          <option value="Facultad 3">Facultad de ciencias medicas</option>
          <option value="Facultad 4">Facultad de ciencias sociales</option>
          <option value="Facultad 5">Artes</option>
          <option value="Facultad 6">Negocios</option>
          <option value="Facultad 7">Tecnología</option>
          <option value="Facultad 8">Educación</option>
          <option value="Facultad 9">Ciencias naturales</option>
          <option value="Facultad 10">Derecho</option>
          <option value="Facultad 11">Comunicación</option>
          <option value="Facultad 12">Diseño</option>
          <option value="Facultad 13">Turismo</option>
          
          
          {/* Agrega más opciones según sea necesario */}
        </select>
        <label htmlFor="sueldoPostu">Sueldo:</label>
        <input
          type="number"
          id="sueldoPostu"
          value={sueldoPostu}
          onChange={(e) => setSueldoPostu(e.target.value)}
          required
        />
        <label htmlFor="jornada">Jornada:</label>
        <input
          type="text"
          id="jornada"
          value={jornada}
          onChange={(e) => setJornada(e.target.value)}
          required
        />
        <label htmlFor="detalles">Detalles:</label>
        <textarea
          id="detalles"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
          required
          defaultValue={""}
        />
        <button type="button" onClick={registrarPostulacion}>
          Registrar Postulación
        </button>
      </form>
  <h1>Lista de trabajos disponibles</h1>
      <ul>
        {postulacionesRegistradas.map((postulacion, index) => (
          <li key={index}>
            <strong>Carrera:</strong> {postulacion.carreraPostu}<br />
            <strong>Facultad:</strong> {postulacion.facultadPostu}<br />
            <strong>Sueldo:</strong> {postulacion.sueldoPostu}<br />
            <strong>Jornada:</strong> {postulacion.jornada}<br />
            <strong>Detalles:</strong> {postulacion.detalles}<br />
            <button onClick={() => eliminarPostulacion(index)}>Eliminar</button>
            <hr />
          </li>
        ))}
      </ul>
  {/* Lista de postulaciones recibidas */}

  <ul id="lista-servicios">
    {/* Aquí se mostrarán las postulaciones recibidas */}
  </ul>
  
  <ul id="lista-aceptadas">{/* cosos aceptados */}</ul>
  

  <div id="lista-servicios">
  <h1>Lista de postulaciones recibidas:</h1>
                {postulacionesRecibidas.length === 0 ? (
                    <p>No se han recibido ninguna postulación.</p>
                ) : (
                    postulacionesRecibidas.map((postulacion, index) => (
                        <div key={index}>
                            <strong>Área #{index + 1}:</strong> {postulacion.seleccion}
                            <br />
                            <strong>Experiencia como docente:</strong> {postulacion.valor}
                            <br />
                            <strong>Nivel académico:</strong> título de {postulacion.meses} nivel
                            <br />
                            <strong>Nombre:</strong> {postulacion.nombre}
                            <br />
                            <strong>Correo:</strong> {postulacion.correo}
                            <br />
                            <strong>Número de contacto:</strong> {postulacion.contacto}
                            <br />
                            <button onClick={() => aceptarPostulacion(index)}>Aceptar</button>
                            <button onClick={() => borrarPostulacionRecibida(index)}>Borrar</button>
                        </div>
                    ))
                )}
            </div>
            <h1>Lista de postulaciones aceptadas</h1>
            <div id="lista-aceptadas">
                {postulacionesAceptadas.length === 0 ? (
                    <p>No se han aceptado ninguna postulación.</p>
                ) : (
                    postulacionesAceptadas.map((postulacion, index) => (
                        <div key={index}>
                            <strong>Área aceptada #{index + 1}:</strong> {postulacion.seleccion}
                            <br />
                            <strong>Experiencia como docente:</strong> {postulacion.valor}
                            <br />
                            <strong>Nivel académico:</strong> título de {postulacion.meses} nivel
                            <br />
                            <strong>Nombre:</strong> {postulacion.nombre}
                            <br />
                            <strong>Correo:</strong> {postulacion.correo}
                            <br />
                            <strong>Número de contacto:</strong> {postulacion.contacto}
                            <br />
                            <button onClick={() => borrarPostulacionAceptada(index)}>Borrar</button>
                        </div>
                    ))
                )}
            </div>
            {/* Botón para iniciar sesión como usuario */}
            <button onClick={() => props.onFormSwitch('adminOpciones')}>
                Regresar
            </button>
</>

  );
}

export default Postulaciones;
