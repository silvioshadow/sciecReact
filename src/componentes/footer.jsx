import React from "react";
import './footer.css'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'

function footer (){
   return(
      <div className="footer-container">
         <div className="rectangle"></div>
         <div className="partes">
            <p className="pf">Productos</p>
            <p className="pf">Complementos</p>
            <p className="pf">Precios</p>
            <p className="pf">Modulos</p>
         </div>
         <div className="partes">
            <h3 className="ftitulo">País</h3>
            <p className="pf1">México</p>
         </div>
         <div className="partes">
            <h3 className="pftituloS">SOCIAL</h3>
            <ul className="lista1">
               <li className="lista2">
                  <img className="icono" src={facebook}/>
                  <p className="pf">Facebook</p>
               </li>
               <li className="lista2">
                  <img className="icono" src={twitter}/>
                  <p className="pf">Twitter</p>
               </li>
               <li className="lista2">
                  <img className="icono" src={youtube}/>
                  <p className="pf">YouTube</p>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default footer;