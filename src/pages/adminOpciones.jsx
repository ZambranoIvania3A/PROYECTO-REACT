  import React from 'react';
  //import '../css/adminOpciones.css';


  export const AdminOptions = (props) => {
    return (
      <div class="container">
        <div class="header">
            <h1>Perfil del Administrador</h1>
            <div class="profile-section">
            <div class="profile-pic icono-redondo"></div>
            <p>Nombre: admin</p>
            <p>Email: admin@example.com</p>
        </div>
        </div>
      <div className="banner">
        <div className="banner-contenedor">
          <div className="banner-contenido banner2">
            <h1 className="promocion-titulo">Gestión de postulaciones</h1>
            <p className="promocion-texto">Crea y elimina datos sobre vacantes de trabajo</p>
            <button onClick={() => props.onFormSwitch('postulaciones')}>Gestión de Postulaciones</button>
          </div>
          <button onClick={() => props.onFormSwitch('loginAdmin')}>Cerra sesión</button>
        </div>
      </div>
      </div>


    );
  };


