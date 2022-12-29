import React from "react";
import './card2.css'
import produccion from '../assets/Produccion.jpeg'
import contable from '../assets/contable.jpeg'

function interes (){
   return(
      <div className="divider2">
         <p>TALVEZ TE INTERESE</p>
         <div className="card-container3">
            <div className="card-horizontal">
               <img className="card2-img" src={produccion}/>
               <div className="text-card2">
                  <p className="tittle">Precio Aproximado : $18,600.00</p>
                  <p className="text">Si buscas optimizar los recursos en tu empresa, tenemos la solución a la mano a  través de nuestro software de produccion.  Somos especialistas en soluciones multimedia para que tu negocio aumente su rentabilidad. Más de 50 mil expertos trabajando a toda hora para  entregar el mejor servicio.</p>
               </div>
            </div>
            <div className="card-horizontal">
               <img className="card22-img" src={contable}/>
               <div className="text-card2">
               <p className="tittle">Precio Aproximado : $15,000.00</p>
               <p className="text">El software contable le facilitará tener la información necesaria para poder tomar decisiones sobre la compra de nuevos productos para su empresa, monitorear y solucionar los problemas que se presenten. Sin duda este producto le será de gran ayuda para que su negocio este seguro y pueda tomar decisiones con altura de miras.</p>
               </div>
            </div>
            <div className="card-horizontal">
               <img className="card22-img" src={contable}/>
               <div className="text-card2">
                  <p className="tittle">Precio Aproximado : $23,000.00</p>
                  <p className="text">El software online web entre sus características primordiales brinda la automática actualización de contenidos funcionando desde cualquier sistema informático independiente y sin limitaciones geográficas. Siendo beneficiados principalmente los profesionales, autónomos y pymes de este proceso de traslación del software tradicional a los sistemas online.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default interes;