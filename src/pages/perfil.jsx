import React, { useEffect, useState } from 'react';

const UserProfile = (props) => {
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

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarios"))?.[0];

    if (usuario) {
      const userProfile = document.getElementById("user-profile");

      const profileHTML = `
        <p><strong>Nombre de Usuario:</strong> ${usuario.username}</p>
        <p><strong>Nombres:</strong> ${usuario.nombres}</p>
        <p><strong>Apellidos:</strong> ${usuario.apellidos}</p>
        <p><strong>Correo Electrónico:</strong> ${usuario.correo}</p>
        <p><strong>Número de Celular:</strong> ${usuario.celular}</p>
        <p><strong>Edad:</strong> ${usuario.edad}</p>
      `;

      userProfile.innerHTML = profileHTML;
    }

    const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    setServiciosRegistrados(servicios);
  }, []);

  return (
    <div className="container">
      <h2>Mi Perfil</h2>
      <div id="user-profile"></div>
      
      {/* Lista de Servicios Registrados */}
      <h1>Postulaciones realizadas</h1>
      
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
      <form onSubmit={handleSubmit}>
        {/* Aquí van los campos del formulario */}
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>Cerrar Sesión</button>
      <button onClick={() => props.onFormSwitch('postularUsuario')}>Postular</button>
    </div>
  );
};

export default UserProfile;
