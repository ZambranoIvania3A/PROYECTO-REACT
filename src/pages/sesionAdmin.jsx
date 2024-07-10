import React, { useState } from 'react';
import '../css/sesionAdmin.css';

export const AdminLogin = (props) => {
  const [useradmin, setUseradmin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (useradmin === 'admin' && password === '123') {
      alert('Inicio de sesión exitoso.');
      // Utiliza onFormSwitch para redirigir al administrador a la página de opciones de administrador
      props.onFormSwitch('adminOpciones');
    } else {
      alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
  };

  const handleRegresarSesionUsuario = () => {
    // Utiliza onFormSwitch para iniciar sesión como usuario
    props.onFormSwitch('login');
  };

  return (
    <div className="container">
      <h1>Administrador</h1>
      <form onSubmit={handleSubmit} id="loginForm">
        <label htmlFor="useradmin">Usuario:</label>
        <input
          type="text"
          id="useradmin"
          name="useradmin"
          required
          value={useradmin}
          onChange={(e) => setUseradmin(e.target.value)}
        /><br/><br />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br />
        <input type="submit" value="Iniciar Sesión" />
      </form>
      <div className="buttons">
        <button
          type="button"
          onClick={handleRegresarSesionUsuario}
        >
          Iniciar sesión como usuario
        </button>
      </div>
    </div>
  );
};
