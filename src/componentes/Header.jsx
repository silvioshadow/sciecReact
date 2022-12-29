import React from 'react';
import './Header.css'
import procomputo from '../assets/procomputo.jpg';
import { useHistory } from 'react-router-dom';

function Header ({titulo}){
   return(
      <nav>
         <div className="header">
            <img className="logopro" src={procomputo}/>
            <li className="MenuH">
               <a href="#">Productos</a>
               <a href="#">Precios</a>
               <a href="#">Recursos</a>
               <a href="Login.js" className='encerrado'>Acceder</a>
               <a href="#" className='encerrado'>Registrarse</a>
            </li>
         </div>
      </nav>
   )
}

export default Header;