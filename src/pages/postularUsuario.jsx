
import React, { useState, useEffect } from 'react';

export const RegistroServiciosForm = (props) => {
  const [serviciosRegistrados, setServiciosRegistrados] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState('seleccionar');
  const [valorServicio, setValorServicio] = useState('');
  const [mesesSeleccionados, setMesesSeleccionados] = useState('seleccionar');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correoUsuario, setCorreoUsuario] = useState('');
  const [contactoUsuario, setContactoUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (servicioSeleccionado === 'seleccionar' || mesesSeleccionados === 'seleccionar') {
      alert('Por favor, seleccione un servicio y una duración válidos.');
      return;
    }

    if (!nombreUsuario || !correoUsuario || !contactoUsuario) {
      alert('Por favor, complete todos los campos obligatorios (Nombre, Correo y Número de contacto).');
      return;
    }

    const servicio = {
      seleccion: servicioSeleccionado,
      valor: valorServicio,
      meses: mesesSeleccionados,
      nombre: nombreUsuario,
      correo: correoUsuario,
      contacto: contactoUsuario
    };

    const nuevosServicios = [...serviciosRegistrados, servicio];
    setServiciosRegistrados(nuevosServicios);
    localStorage.setItem("servicios", JSON.stringify(nuevosServicios));

    alert("Servicio registrado con éxito.");
    resetFormFields();
  };

  const resetFormFields = () => {
    setServicioSeleccionado('seleccionar');
    setValorServicio('');
    setMesesSeleccionados('seleccionar');
    setNombreUsuario('');
    setCorreoUsuario('');
    setContactoUsuario('');
  };

  useEffect(() => {
    const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    setServiciosRegistrados(servicios);
  }, []);

  const eliminarServicio = (index) => {
    const nuevosServicios = serviciosRegistrados.filter((_, i) => i !== index);
    setServiciosRegistrados(nuevosServicios);
    localStorage.setItem("servicios", JSON.stringify(nuevosServicios));
  };

  return (
    <div className="container">
      <h2>Registro Laboral</h2>
      <form id="registro-servicios-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="opciones-servicio">Seleccione el área al que desea postular:</label>
      <select
        id="opciones-servicio"
        name="opciones-servicio"
        value={servicioSeleccionado}
        onChange={(e) => setServicioSeleccionado(e.target.value)}
        required
      >
        <option value="seleccionar">Áreas</option>
        <option value="Ingeniería">Ingeniería</option>
        <option value="Licenciaturas">Licenciaturas</option>
        <option value="Ciencias médicas">Ciencias médicas</option>
        <option value="Artes">Artes</option>
        <option value="Negocios">Negocios</option>
        <option value="Tecnología">Tecnología</option>
        <option value="Educación">Educación</option>
        <option value="Ciencias naturales">Ciencias naturales</option>
        <option value="Derecho">Derecho</option>
        <option value="Comunicación">Comunicación</option>
        <option value="Diseño">Diseño</option>
        <option value="Turismo">Turismo</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="valor-servicio">Describa cuál es su experiencia:</label>
      <input
        type="text"
        id="valor-servicio"
        name="valor-servicio"
        value={valorServicio}
        onChange={(e) => setValorServicio(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="meses">¿Cuál es su nivel académico?</label>
      <select
        id="meses"
        name="meses"
        value={mesesSeleccionados}
        onChange={(e) => setMesesSeleccionados(e.target.value)}
        required
      >
        <option value="seleccionar">Nivel académico</option>
        <option value="1">Título de tercer nivel</option>
        <option value="2">Título de cuarto nivel</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        id="correo"
        name="correo"
        value={correoUsuario}
        onChange={(e) => setCorreoUsuario(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="contacto">Número de contacto:</label>
      <input
        type="tel"
        id="contacto"
        name="contacto"
        value={contactoUsuario}
        onChange={(e) => setContactoUsuario(e.target.value)}
        required
      />
    </div>

    <button type="submit">Enviar</button>
  </form>

      {/* Tu lista de servicios registrados */}
      <ul id="lista-servicios">
        {serviciosRegistrados.length === 0 ? (
          <p>No se han registrado ningún plan.</p>
        ) : (
          serviciosRegistrados.map((servicio, index) => (
            <li key={index}>
              {/* Aquí se muestra cada servicio registrado */}
              <strong>Área #{index + 1}:</strong> {servicio.seleccion}<br />
              <strong>Experiencia como docente:</strong> {servicio.valor}<br />
              <strong>Nivel académico:</strong> título de {servicio.meses} nivel<br />
              <strong>Nombre:</strong> {servicio.nombre}<br />
              <strong>Correo:</strong> {servicio.correo}<br />
              <strong>Número de contacto:</strong> {servicio.contacto}<br />
              <button onClick={() => eliminarServicio(index)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>

      <button onClick={() => props.onFormSwitch('perfil')}>
        Regresar al perfil
      </button>
    </div>
  );
};
