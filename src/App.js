import React, { useState } from 'react';
import './App.css';

//importaciones de los componentes
import { AdminLogin } from './pages/sesionAdmin';
import { UsuarioLogin } from './pages/sesionUsuario';
import { RegistroUsuario } from './pages/registroUsuario';
import { Inicio } from './pages/principal';
import { AdminOptions } from './pages/adminOpciones';
import Postulaciones from './pages/gestionPostulaciones';
import LaboralComponent from './pages/laboral';
import { RegistroServiciosForm } from './pages/postularUsuario';
import UserProfile from './pages/perfil';

//crea función
function App() {
    //estbablecer punto de inicio del proyecto por medio de rutas
    const [currentForm, setCurrentForm] = useState('inicio');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    // crear rutas con las importaciones
    const components = {
        login: < UsuarioLogin onFormSwitch = { toggleForm }
        />,
        loginAdmin: < AdminLogin onFormSwitch = { toggleForm }
        />,
        registro: < RegistroUsuario onFormSwitch = { toggleForm }
        />,
        inicio: < Inicio onFormSwitch = { toggleForm }
        />,
        adminOpciones: < AdminOptions onFormSwitch = { toggleForm }
        />,
        postulaciones: < Postulaciones onFormSwitch = { toggleForm }
        />,
        laboral: < LaboralComponent onFormSwitch = { toggleForm }
        />,
        postularUsuario: < RegistroServiciosForm onFormSwitch = { toggleForm }
        />,
        perfil: < UserProfile onFormSwitch = { toggleForm }
        />,
    };

    const CurrentComponent = components[currentForm];

    return (
        <
        div className="App">{CurrentComponent}</div>
    );
 }


export default App;

