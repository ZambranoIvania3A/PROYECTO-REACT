import React, { useState } from 'react';
import '../css/sesionUsuario.css';

export const UsuarioLogin = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los usuarios almacenados en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Validar credenciales
    const usuarioEncontrado = usuarios.find(
      (user) => user.username === username && user.password === password
    );

    if (usuarioEncontrado) {
      showMessage('Inicio de sesión exitoso.', 'success');
      // Utiliza onFormSwitch para redirigir al usuario a la página de perfil
      props.onFormSwitch('perfil');
    } else {
      showMessage('Credenciales incorrectas. Por favor, inténtelo nuevamente.', 'error');
    }
  };

  const showMessage = (text, type) => {
    setMessage(text);
    if (type === 'success') {
      alert('Inicio de sesión exitoso.');
    } else if (type === 'error') {
      alert('Credenciales incorrectas. Por favor, inténtelo nuevamente.');
    }
  };

  const handleRegresarPrincipal = () => {
    // Utiliza onFormSwitch para regresar a la página principal
    props.onFormSwitch('inicio');
  };

  const handleRegresarRegistro = () => {
    // Utiliza onFormSwitch para ir a la página de registro
    props.onFormSwitch('registro');
  };

  const handleRegresarAdmin = () => {
    // Utiliza onFormSwitch para iniciar sesión como administrador
    props.onFormSwitch('loginAdmin');
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div id="message">{message}</div>
      <div className="buttons">
        <button
          type="button"
          onClick={handleRegresarPrincipal}
        >
          Regresar a la pestaña principal
        </button>
        <button
          type="button"
          onClick={handleRegresarRegistro}
        >
          ¿No tienes cuenta? Regístrate
        </button>
        <button
          type="button"
          onClick={handleRegresarAdmin}
        >
          Iniciar sesión como administrador
        </button>
      </div>
    </div>
  );
};
