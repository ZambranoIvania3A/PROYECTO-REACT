import React from 'react';
import '../css/principal.css'; // Archivo CSS para estilos

export const Inicio = ({onFormSwitch}) => {

    const handleInicio = () => {
        onFormSwitch('inicio');
    };
    const handleLogin = () => {
        onFormSwitch('login');
      };
      const handleLaboral = () => {
        onFormSwitch('laboral');
      };
  return (

    <body className="pestaña">
      <header className="arriba">
        <div className="barra">
          
          <nav className="logo">
            <button
                    type="button"
                    onClick={handleInicio}
                    >
                    Uleam
            </button>
          </nav>
          <nav className="navegacion">
          <button
                    type="button"
                    onClick={handleLaboral}
                    >
                 <i className="fa-solid fa-briefcase"></i> Oferta Laboral
            </button>
           {/* <a href="./inscripciones.html" className="navegacion2"><i className="fa-solid fa-hand-holding-heart"></i>Inscripción</a>*/}
          </nav>
          <nav className="iniciarSesion">
            <button
                type="button"
                onClick={handleLogin}
                >
                <i className="fa-solid fa-sign-in-alt"></i> Iniciar sesión
            </button>
          </nav>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </div>
        <div className="banner">
        <h1>GESTIÓN DE TALENTO HUMANO ULEAM</h1>
          {/* Contenido del banner */}
          <div class="banner-contenedor">
                <div className="banner-contenido banner1">
                <h1 class="promocion-titulo">¿ESTÁS BUSCANDO EMPLEO?</h1>
                <p className="promocion-texto">Regístrate para aplicar a vacantes laborales.</p>
                <button type="button" className="promocion-btn">Regístrate ahora</button>
                </div>
                <div class="banner-contenido banner2">
                    <h1 className="promocion-titulo">OPORTUNIDADES LABORALES</h1>
                    <p className="promocion-texto">Conoce las oportunidades laborales que tenemos para ti.</p>
                    <button type="button" className="promocion-btn">Ver ofertas</button>
                    </div>
                </div>
                 {/* Contenido principal */}
        </div>
      </header>
      <main className="medio">
        <section className="seccion1">
          <h2 className="titulo">¿QUIÉNES SOMOS?</h2>
          <p className="descripcion">Más información aqui</p>
          <a href="https://www.uleam.edu.ec/" className="boton" >Ir</a>
        </section>
        <section className="seccion2">
          <article className="articulo">
            <h2 className="titulo">NUESTRO PROPÓSITO</h2>
            <p className="descripcion">En Empleo Talento Humano nos dedicamos a potenciar el talento de las personas, los equipos y las organizaciones.</p>
          </article>
          <article className="articulo">
            <h2 className="titulo">¡Descubre las últimas vacantes disponibles!</h2>
            <p className="descripcion">Encuentra las mejores oportunidades de empleo y aplica a las plazas disponibles.</p>
          </article>
        </section>
      </main>
       {/* Pie de pagina */}
      <footer className="abajo">
        <div className="redes-sociales">
          <a href="https://www.facebook.com"  className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          © Gestión de Talento Humano. Dirección: Av. Circunvalación - Vía a San Mateo, Manta - Manabí - Ecuador
          {/* Puedes agregar más botones de redes sociales aquí */}
        </div>
      </footer>
    </body>
  );
};


