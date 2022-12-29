import React from "react";
import './Fondo.css'
import './Boxlogin.css';
import lsciec from '../assets/logo-siec.png';

function Fondo(){
   return(
      <form>
         <div className="container-Box">
         <p className="login-header">Login</p>
         <h1 className="titulo-login">Sistema de  control de Ingresos y Egresos</h1>
         <img src={lsciec} className="logoS"/>
         <h2 className="instrucciones">Autenticación de usuarios Para iniciar seción ingrese su correo y contraseña</h2>
      </div>
      <div className="container-box2">
         <fieldset className="cuenta">
            <legend>cuenta</legend>
            <input type="text" id="cuenta" name="name"/>
         </fieldset>
         <fieldset className="contraseña">
            <legend>contraseña</legend>
            <input type="text" id="contraseña" name="name"/> 
         </fieldset>
         <p className="text-forgo">¿Olvidaste tu contraseña?</p>
      </div>
      <a className="btn-ingresar" href="#">Ingresar</a>
      </form>
   );
}

export default Fondo;