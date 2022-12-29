import React from "react";
import './card1.css'
import inventario from '../assets/inventario.jpg'
import costos from '../assets/costos.jpg'
import produccion from '../assets/Produccion.jpeg'

function cards() {
   return(
      <div className="card-container">
         <div className="Card">
            <img className="img-card" src={inventario}/>
            <p className="text-card">Software de inventario</p>
         </div>
         <div className="Card">
            <img className="img-card" src={costos}/>
            <p className="text-card">Software de costos</p>
         </div>
         <div className="Card">
            <img className="img-card" src={produccion}/>
            <p className="text-card">Software de produccion</p>
         </div>
         <div className="Button">
            <button className="button">Conoce mas</button>
         </div>
      </div>
   )
}

export default cards;