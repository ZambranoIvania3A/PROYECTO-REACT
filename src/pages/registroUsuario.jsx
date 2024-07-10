import React, { useState } from 'react';
import '../css/registroUsuario.css';

export const RegistroUsuario = (props) => {
  const [username, setUsername] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!username || !nombres || !apellidos || !correo || !celular || !edad || !password || !confirmPassword) {
      showMessage('Por favor, complete todos los campos.', 'error');
      return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(nombres) || !/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(apellidos)) {
      showMessage("Los campos 'nombres' y 'apellidos' solo pueden contener letras, espacios y caracteres acentuados.", 'error');
      return;
    }

    if (password.length < 3) {
      showMessage('La contraseña debe tener al menos 3 caracteres.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showMessage('Las contraseñas no coinciden.', 'error');
      return;
    }

    if (isNaN(edad) || edad < 1 || edad > 99) {
      showMessage('La edad debe ser un número entre 1 y 99.', 'error');
      return;
    }

    const correoVali = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!correoVali.test(correo)) {
      showMessage('Ingrese una dirección de correo electrónico válida.', 'error');
      return;
    }

    const celularVali = /^\d{10}$/;
    if (!celularVali.test(celular)) {
      showMessage('Ingrese un número de teléfono válido (10 dígitos).', 'error');
      return;
    }

    if (username.length < 3 || username.length > 20) {
      showMessage('El nombre de usuario debe tener entre 3 y 20 caracteres.', 'error');
      return;
    }

    const usuario = {
      username,
      nombres,
      apellidos,
      correo,
      celular,
      edad,
      password,
    };

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    showMessage('Registro exitoso.', 'success');
    resetForm();
  };

  const showMessage = (text, type) => {
    setMessage(text);
    if (type === 'error') {
      alert('Error: ' + text);
    } else if (type === 'success') {
      alert('Éxito: ' + text);
    }
  };

  const resetForm = () => {
    setUsername('');
    setNombres('');
    setApellidos('');
    setCorreo('');
    setCelular('');
    setEdad('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleRegresarPrincipal = () => {
    props.onFormSwitch('inicio');
  };

  const handleRegresarSesionUsuario = () => {
    props.onFormSwitch('login');
  };

  return (
    <div className="container">
      <h2>Registro de Sesión</h2>
      <form onSubmit={handleSubmit} id="registro-form">
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
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            required
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            required
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Número de celular:</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            required
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad (1-99):</label>
          <input
            type="number"
            id="edad"
            name="edad"
            min="1"
            max="99"
            required
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
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
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <div id="message">{message}</div>
      <div className="buttons">
        <button type="button" onClick={handleRegresarPrincipal}>
          Regresar a Inicio
        </button>
        <button type="button" onClick={handleRegresarSesionUsuario}>
          Regresar a Inicio de Sesión
        </button>
      </div>
    </div>
  );
};
